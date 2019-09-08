import * as React from "react";
import { Popover as _Popover } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  title: string;
  bodyText: string;
  placement: string;
  positionLeft: number;
  positionTop: number;
}

export class Popover extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    title: "Hello World!",
    bodyText: "And here's some amazing content. It's very engaging. right?",
    placement: "right",
    positionLeft: 200,
    positionTop: 50
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" },
    bodyText: { type: ControlType.String, title: "Body text" },
    placement: {
      type: ControlType.Enum,
      options: ["top", "right", "bottom", "left"],
      title: "Placement"
    },
    positionLeft: { type: ControlType.Number, title: "Position Left" },
    positionTop: { type: ControlType.Number, title: "Position Top" }
  };

  render() {
    const {
      bodyText,
      placement,
      positionLeft,
      positionTop,
      title
    } = this.props;
    return (
      <div style={{ height: 120 }}>
        <_Popover
          id={"popover" + Date.now()}
          placement={placement}
          positionLeft={positionLeft}
          positionTop={positionTop}
          title={title}
        >
          {bodyText}
        </_Popover>
      </div>
    );
  }
}
