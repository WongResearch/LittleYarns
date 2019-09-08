import * as React from "react";
import { ProgressBar as _ProgressBar } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  now: number;
  striped: boolean;
  bsStyle: string;
}

export class ProgressBar extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    now: 50,
    striped: false,
    bsStyle: "primary"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    now: { type: ControlType.Number, title: "Now" },
    striped: { type: ControlType.Boolean, title: "Striped" },
    bsStyle: {
      type: ControlType.Enum,
      options: ["default", "primary", "success", "warning", "danger"],
      title: "Style"
    }
  };

  render() {
    const { now, bsStyle, striped } = this.props;
    return (
      <_ProgressBar
        now={now}
        striped={striped}
        bsStyle={bsStyle}
        label={`${now}%`}
      />
    );
  }
}
