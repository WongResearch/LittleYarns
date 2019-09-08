import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

interface Props {
    enabled: boolean
    onChange: (enabled: boolean) => void
    tint?: string
}

export function Switch({ enabled, tint, onChange }: Props) {
    const externalEnabledRef = React.useRef(enabled)
    const [currentEnabled, setCurrentEnabled] = React.useState(enabled)

    if (externalEnabledRef.current !== enabled) {
        externalEnabledRef.current = enabled
        if (currentEnabled !== enabled) {
            setCurrentEnabled(enabled)
        }
    }

    return (
        <Frame
            width={51}
            height={31}
            background={tint}
            radius={1000}
            center={true}
            onTapStart={() => {
                setCurrentEnabled(!currentEnabled)
                if (onChange) onChange(!currentEnabled)
            }}
        >
            <Frame
                background={"#F8F8F8"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                initial={{ scale: currentEnabled ? 0 : 1 }}
                animate={{ scale: currentEnabled ? 0 : 1 }}
                transition={{ type: "tween" }}
                radius={1000}
                shadow={"inset 0 0 0 1px #E4E4E4"}
            />
            <Frame
                background={"white"}
                top={1}
                bottom={1}
                width={31}
                radius={1000}
                initial={{ left: currentEnabled ? 19 : 1 }}
                animate={{ left: currentEnabled ? 19 : 1 }}
                shadow={"0 2px 1px 1px rgba(0,0,0,.07), 0 0 1px rgba(0,0,0,.3)"}
            />
        </Frame>
    )
}

Switch.defaultProps = {
    width: 51,
    height: 31,
    enabled: true,
    tint: "#4BD964",
}

addPropertyControls(Switch, {
    enabled: { type: ControlType.Boolean, title: "Enabled" },
    tint: { type: ControlType.Color, title: "Tint" },
})
