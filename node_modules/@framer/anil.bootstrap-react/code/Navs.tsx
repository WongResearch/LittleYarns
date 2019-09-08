import * as React from "react";
import { Nav, NavItem } from "../lib";
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
  activeKey: number;
  bsStyle: string;
  items: string;
  itemsDisabled: string;
}

interface State {
  activeKey: number;
}

export class Navs extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey });
  }
  // Set default properties
  static defaultProps = {
    activeKey: 1,
    bsStyle: "pills",
    items: "NavItem 1 content, NavItem 2 content, NavItem 3 content",
    itemsDisabled: "false,false,true"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    items: { type: ControlType.String, title: "Text" },
    itemsDisabled: { type: ControlType.String, title: "Text" },
    bsStyle: {
      type: ControlType.Enum,
      options: ["pills", "tabs"],
      title: "Nav Type"
    }
  };

  render() {
    const { bsStyle, items, itemsDisabled } = this.props;
    return (
      <Nav
        bsStyle={bsStyle}
        activeKey={this.state.activeKey}
        onSelect={this.handleSelect}
      >
        {items &&
          items.split(",").map((item, index) => {
            const disabled = itemsDisabled.split(",")[index] === "true";
            return (
              <NavItem key={index} eventKey={index + 1} disabled={disabled}>
                {item}
              </NavItem>
            );
          })}
      </Nav>
    );
  }
}
