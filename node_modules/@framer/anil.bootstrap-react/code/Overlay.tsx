import * as React from "react";
import { findDOMNode } from "react-dom";
import { Overlay as _Overlay, Button, Tooltip } from "../lib";
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
  overlayText: string;
  placement: string;
}

export class Overlay extends React.Component<Props, { show: boolean }> {
  constructor(props, context) {
    super(props, context);

    this.getTarget = this.getTarget.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      show: false
    };
  }

  getTarget() {
    return findDOMNode(this.target);
  }

  handleToggle() {
    this.setState({ show: !this.state.show });
  }

  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    overlayText: "overlay text",
    placement: "bottom"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    overlayText: { type: ControlType.String, title: "Overlay Text" },
    placement: {
      type: ControlType.Enum,
      options: ["top", "right", "bottom", "left"],
      title: "placement"
    }
  };

  render() {
    const sharedProps = {
      container: this,
      target: this.getTarget,
      show: this.state.show
    };
    const { text, overlayText, placement } = this.props;
    return (
      <div style={{ height: 100, paddingLeft: 150, position: "relative" }}>
        <Button
          ref={button => {
            this.target = button;
          }}
          onClick={this.handleToggle}
        >
          {text}
        </Button>

        <_Overlay {...sharedProps} placement={placement}>
          <Tooltip id="overload-left">{overlayText}</Tooltip>
        </_Overlay>
      </div>
    );
  }
}
