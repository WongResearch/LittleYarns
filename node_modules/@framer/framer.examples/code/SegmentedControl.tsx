import * as React from "react"
import { Stack, Frame, PropertyControls, ControlType } from "framer"

interface Props {
    segment1: string
    segment2: string
    segment3: string
    segment4: string
    currentSegment: number
    tintColor: string
    textColor: string
    onSegmentChange: (index: number, value: string) => void
    width: number
    height: number
}

interface State {
    currentSegment: number
    externalCurrentSegment: number
}

export class SegmentedControl extends React.Component<Partial<Props>, State> {
    static defaultProps = {
        currentSegment: 0,
        segment1: "Item 1",
        segment2: "Item 2",
        segment3: "",
        segment4: "",
        tintColor: "#007AFF",
        textColor: "white",
        width: 120,
        height: 27,
    }

    static propertyControls: PropertyControls<Props> = {
        segment1: { type: ControlType.String, title: "Segment 1" },
        segment2: { type: ControlType.String, title: "Segment 2" },
        segment3: { type: ControlType.String, title: "Segment 3" },
        segment4: { type: ControlType.String, title: "Segment 4" },
        currentSegment: { type: ControlType.Number, min: 0, title: "Current" },
        tintColor: { type: ControlType.Color, title: "Tint" },
        textColor: { type: ControlType.Color, title: "Text" },
    }

    state = {
        currentSegment: SegmentedControl.defaultProps.currentSegment,
        externalCurrentSegment: SegmentedControl.defaultProps.currentSegment,
    }

    componentDidMount() {
        const { currentSegment } = this.props
        this.setState({ ...this.state, currentSegment })
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        const { currentSegment } = nextProps
        const { externalCurrentSegment } = prevState
        if (currentSegment !== externalCurrentSegment) {
            return { currentSegment, externalCurrentSegment: currentSegment }
        }
        return null
    }

    onTapSegment = (index: number) => {
        const { onSegmentChange } = this.props
        if (onSegmentChange) {
            const segmentTitle = this.segmentTitles()[index]
            onSegmentChange(index, segmentTitle)
        } else {
            this.setState({ ...this.state, currentSegment: index })
        }
    }

    segmentTitles = () => {
        const { segment1, segment2, segment3, segment4 } = this.props
        const segmentTitles: string[] = []
        if (segment1) segmentTitles.push(segment1)
        if (segment2) segmentTitles.push(segment2)
        if (segment3) segmentTitles.push(segment3)
        if (segment4) segmentTitles.push(segment4)
        return segmentTitles
    }

    render() {
        const { tintColor, textColor } = this.props
        const { currentSegment } = this.state

        return (
            <Stack
                width={"100%"}
                height={"100%"}
                backgroundColor={"transparent"}
                radius={4}
                overflow={"hidden"}
                direction={"horizontal"}
                gap={0}
                style={{
                    border: `1px solid ${tintColor}`,
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    cursor: "default",
                }}
            >
                {this.segmentTitles().map((segmentTitle, idx) => {
                    const isCurrent = idx === currentSegment
                    const borderLeftEnabled = idx !== 0
                    return (
                        <Frame
                            key={idx}
                            width={"1fr"}
                            height={"100%"}
                            backgroundColor={
                                isCurrent ? tintColor : "transparent"
                            }
                            color={isCurrent ? textColor : tintColor}
                            onTap={this.onTapSegment.bind(this, idx)}
                            style={{
                                borderLeft: borderLeftEnabled
                                    ? `1px solid ${tintColor}`
                                    : undefined,
                                fontSize: 13,
                            }}
                        >
                            {segmentTitle}
                        </Frame>
                    )
                })}
            </Stack>
        )
    }
}
