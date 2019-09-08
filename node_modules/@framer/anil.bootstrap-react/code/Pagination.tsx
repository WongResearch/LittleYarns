import * as React from "react";
import { Pagination as _Pagination } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  text: string;
  bsSize: string;
  active: number;
  totalPagination: number;
}

export class Pagination extends React.Component<Props> {
  constructor(props, context) {
    super(props, context);
    this.getItems = this.getItems.bind(this);
  }
  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    bsSize: "default",
    active: 3,
    totalPagination: 5
  };
  getItems(totalPagination, active) {
    let items = [];
    for (let number = 1; number <= totalPagination; number++) {
      items.push(
        <_Pagination.Item active={number === active}>{number}</_Pagination.Item>
      );
    }
    return items;
  }
  // Items shown in property panel
  static propertyControls: PropertyControls = {
    totalPagination: { type: ControlType.Number, title: "Total Pagination" },
    active: { type: ControlType.Number, title: "Active" },
    bsSize: {
      type: ControlType.Enum,
      options: ["default", "large", "small", "xsmall"],
      title: "Size"
    }
  };

  render() {
    const { bsSize, active, totalPagination } = this.props;
    const count = 1;
    return (
      <_Pagination bsSize={bsSize}>
        {this.getItems(totalPagination, active)}
      </_Pagination>
    );
  }
}
