import * as React from "react";
import { Alert as _Alert } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  text: string;
  bsStyle: string;
}

export class Alert extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text:
      "<strong>Holy guacamole!</strong> Best check yo self, you're not looking",
    bsStyle: "warning"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    bsStyle: {
      type: ControlType.Enum,
      options: ["default", "success", "warning", "danger"],
      title: "Button Type"
    }
  };

  render() {
    const { text, bsStyle } = this.props;
    return (
      <_Alert bsStyle={bsStyle}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </_Alert>
    );
  }
}
