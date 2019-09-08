import * as React from "react";
import { Modal as _Modal, Button } from "../lib";
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
  body: string;
  cancelActionText: string;
  yesActionText: string;
  bsYesActionBtnStyle: string;
}

export class Modal extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    title: "Modal title",
    body: "One fine body...",
    cancelActionText: " cancel",
    yesActionText: "save",
    bsYesActionBtnStyle: "primary"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Modal title" },
    body: { type: ControlType.String, title: "One fine body..." },
    cancelActionText: { type: ControlType.String, title: "Close" },
    yesActionText: { type: ControlType.String, title: "Save changes" },
    bsYesActionBtnStyle: {
      type: ControlType.Enum,
      options: ["default", "primary", "success", "warning", "danger", "link"],
      title: "Button Type"
    }
  };

  render() {
    return (
      <div className="static-modal">
        <_Modal.Dialog>
          <_Modal.Header>
            <_Modal.Title>{this.props.title}</_Modal.Title>
          </_Modal.Header>

          <_Modal.Body>{this.props.body}</_Modal.Body>

          <_Modal.Footer>
            <Button>{this.props.cancelActionText}</Button>
            <Button bsStyle={this.props.bsYesActionBtnStyle}>
              {this.props.yesActionText}
            </Button>
          </_Modal.Footer>
        </_Modal.Dialog>
      </div>
    );
  }
}
