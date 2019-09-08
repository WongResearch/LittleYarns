import * as React from "react";
import { Badge as _Badge } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  badgeNumber: number;
  bsClass: string;
}

export class Badge extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    badgeNumber: 12,
    bsClass: "badge"
  };
  // Items shown in property panel
  static propertyControls: PropertyControls = {
    badgeNumber: { type: ControlType.Number, title: "Badge Number" }
  };
  render() {
    return <_Badge {...this.props}>{this.props.badgeNumber}</_Badge>;
  }
}
