import * as React from "react"
import { Frame, addPropertyControls, ControlType, useAnimation } from "framer"

interface Props {
    indicatorColor: string
    width: number
    height: number
}

export function ProgressIndicator({
    indicatorColor = "rgba(142,142,147,100)",
}: Props) {
    const size = 20
    const controls = useAnimation()

    function buildParticles(size) {
        const rotation = -30
        const opacityReduce = 0.08
        return Array.from({ length: 12 }).map((n, index) => {
            return (
                <Frame
                    name="Particle"
                    key={`SpinnerParticle${index}`}
                    height={size / 4}
                    width={size / 10}
                    rotate={rotation * index}
                    background={indicatorColor}
                    radius={size / 10 / 2}
                    center={"x"}
                    originX={0.5}
                    originY={2}
                    opacity={1 - opacityReduce * index}
                />
            )
        })
    }

    async function spin() {
        const delay = 0.05
        const steps = 12
        const transition = { duration: 0, delay: delay }
        for (let i = 0; i < steps; i++) {
            await controls.start({ rotateZ: (360 / steps) * i, transition })
        }
        spin()
    }

    spin()

    return (
        <Frame
            name="Spinner"
            size={size}
            center={true}
            background=""
            animate={controls}
        >
            {buildParticles(size)}
        </Frame>
    )
}

ProgressIndicator.defaultProps = {
    width: 40,
    height: 40,
}

addPropertyControls(ProgressIndicator, {
    indicatorColor: {
        type: ControlType.Color,
        title: "Indicator",
        defaultValue: "rgba(142,142,147,100)",
    },
})
