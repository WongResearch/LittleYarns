import * as React from "react";
import { Button as _Button } from "../lib";
import { PropertyControls, ControlType } from "framer";

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};

// Define type of property
interface Props {
  title: string;
}

// export class Button extends React.Component<Props> {
//   // Set default properties
//   static defaultProps = {
//     text: "Hello World!"
//   };

//   // Items shown in property panel
//   static propertyControls: PropertyControls = {
//     text: { type: ControlType.String, title: "Text" }
//   };

//   render() {
//     return <div style={style}>{this.props.text}</div>;
//   }
// }

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    title: "Button",
    size: "md",
    buttonType: "default",
    width: 68,
    height: 28
  };
  // Items shown in property panel
  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" },
    bsStyle: {
      type: ControlType.Enum,
      options: ["default", "primary", "success", "warning", "danger", "link"],
      title: "Button Type"
    },
    bsSize: {
      type: ControlType.Enum,
      options: ["default", "large", "small", "xsmall"],
      title: "Size"
    }
  };
  render() {
    return <_Button {...this.props}>{this.props.title}</_Button>;
  }
}
