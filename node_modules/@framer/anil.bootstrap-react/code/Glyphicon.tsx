import * as React from "react";
import { Glyphicon as _Glyphicon, Button } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  icon: string;
  text: string;
  bsSize: string;
  bsStyle: string;
}

export class Glyphicon extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    icon: "star",
    text: "Star",
    bsSize: "default",
    bsStyle: "default"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    icon: { type: ControlType.String, title: "Icon" },
    text: { type: ControlType.String, title: "Text" },
    bsSize: {
      type: ControlType.Enum,
      options: ["default", "large", "small", "xsmall"],
      title: "Size"
    },
    bsStyle: {
      type: ControlType.Enum,
      options: ["default", "primary", "success", "warning", "danger", "link"],
      title: "Button Type"
    }
  };

  render() {
    const { text, icon, bsSize, bsStyle } = this.props;
    return (
      <Button bsSize={bsSize} bsStyle={bsStyle}>
        <_Glyphicon glyph={icon} /> {text}
      </Button>
    );
  }
}
