import * as React from "react";
import { FormGroup, FormControl } from "../lib";
import { PropertyControls, ControlType, Stack } from "framer";

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
  placeholder: string;
  inputType: string;
}

export class FormInput extends React.Component<Props, { value: string }> {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }
  // Set default properties
  static defaultProps = {
    placeholder: "Enter Text",
    inputType: "text"
  };
  // Items shown in property panel
  static propertyControls: PropertyControls = {
    placeholder: { type: ControlType.String, title: "Placeholder" },
    inputType: {
      type: ControlType.Enum,
      options: ["text", "email", "number"],
      title: "Input Type"
    }
  };

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}
