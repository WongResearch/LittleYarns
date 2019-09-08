import * as React from "react";
import { Pager as _Pager } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  previousText: string;
  nextText: string;
  previousLink: string;
  nextLink: string;
  alignPrevious: boolean;
  alignNext: boolean;
}

export class Pager extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    previousText: "Previuos",
    nextText: "Next",
    previousLink: "#",
    nextLink: "#",
    alignPrevious: false,
    alignNext: false
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    previousText: { type: ControlType.String, title: "Previous Text" },
    nextText: { type: ControlType.String, title: "Next Text" },
    previousLink: { type: ControlType.String, title: "Previous link" },
    nextLink: { type: ControlType.String, title: "Next link" },
    alignPrevious: { type: ControlType.Boolean, title: "Align Previous" },
    alignNext: { type: ControlType.Boolean, title: "Align Next" }
  };

  render() {
    const {
      previousText,
      nextText,
      previousLink,
      nextLink,
      alignPrevious,
      alignNext
    } = this.props;
    return (
      <_Pager>
        <_Pager.Item previous={alignPrevious} href={previousLink}>
          {previousText}
        </_Pager.Item>
        <_Pager.Item next={alignNext} href={nextLink}>
          {nextText}
        </_Pager.Item>
      </_Pager>
    );
  }
}
