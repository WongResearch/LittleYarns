import * as React from "react";
import { Jumbotron as _Jumbotron, Button } from "../lib";
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
  heading: string;
  description: string;
  buttonText: string;
  bsStyle: string;
}

export class Jumbotron extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    heading: "Hello, world!",
    description:
      "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    buttonText: "Learn more",
    bsStyle: "primary"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    heading: { type: ControlType.String, title: "Heading" },
    description: { type: ControlType.String, title: "Description" },
    buttonText: { type: ControlType.String, title: "Button text" },
    bsStyle: {
      type: ControlType.Enum,
      options: ["default", "primary", "success", "warning", "danger", "link"],
      title: "Button Type"
    }
  };

  render() {
    const { heading, description, bsStyle, buttonText } = this.props;
    return (
      <_Jumbotron>
        <h1 dangerouslySetInnerHTML={{ __html: heading }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <p>
          <Button bsStyle={this.props.bsStyle}>{this.props.buttonText}</Button>
        </p>
      </_Jumbotron>
    );
  }
}
