import * as React from "react";
import { PageHeader as _PageHeader } from "../lib";
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
  text: string;
  subText: string;
}

export class PageHeader extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Example page header",
    subText: "Subtext for header"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    subText: { type: ControlType.String, title: "Text" }
  };

  render() {
    const { text, subText } = this.props;
    return (
      <_PageHeader>
        {text} <small>{subText}</small>
      </_PageHeader>
    );
  }
}
