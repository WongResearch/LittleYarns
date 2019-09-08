import * as React from "react";
import { Breadcrumb as _Breadcrumb } from "../lib";
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
  items: string;
}

export class Breadcrumb extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    items: "Home/Library/Data"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    items: { type: ControlType.String, title: "items" }
  };

  render() {
    const { items } = this.props;
    const lastItemIndex = items.split("/").length - 1;
    return (
      <_Breadcrumb>
        {items.split("/").map((item, index) => {
          const active = index === lastItemIndex ? true : false;
          return (
            <_Breadcrumb.Item href="#" active={active}>
              {item}
            </_Breadcrumb.Item>
          );
        })}
      </_Breadcrumb>
    );
  }
}
