import * as React from "react";
import { Tooltip as _Tooltip } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  tooltipText: string;
  position: string;
}

export class Tooltip extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    tooltipText: "Tooltip text",
    position: "bottom"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    position: {
      type: ControlType.Enum,
      options: ["top", "right", "bottom", "left"],
      title: "Size"
    }
  };

  render() {
    const { position, tooltipText } = this.props;
    return (
      <_Tooltip
        placement={position}
        id={"tooltip-" + Date.now()}
        className="in"
      >
        {tooltipText}
      </_Tooltip>
    );
  }
}
