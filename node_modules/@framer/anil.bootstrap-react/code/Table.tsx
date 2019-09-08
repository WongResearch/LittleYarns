import * as React from "react";
import { Table as _Table } from "../lib";
import { PropertyControls, ControlType } from "framer";
import { roundedNumber } from "framer/types/src/render";

interface TableData {
  head: any[];
  rows: any[];
}
// Define type of property
interface Props {
  text: string;
  striped: boolean;
  bordered: boolean;
  condensed: boolean;
  hover: boolean;
  tableData: string;
}

export class Table extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    striped: true,
    bordered: true,
    condensed: true,
    hover: true,
    tableData:
      '{"head":["#","First Name","Last Name","UserName"],"rows":[[1,"Mark","Otto","@mdo"],[2,"Jacob","Thornton","@fat"],[3,{"colSpan":2,"data":"Larry the Bird"},"@twitter"]]}'
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    tableData: { type: ControlType.String, title: "Table data" },
    striped: { type: ControlType.Boolean, title: "Striped" },
    bordered: { type: ControlType.Boolean, title: "Bordered" },
    condensed: { type: ControlType.Boolean, title: "Condensed" },
    hover: { type: ControlType.Boolean, title: "Hover" }
  };

  render() {
    const { striped, bordered, condensed, hover } = this.props;
    const tableData = JSON.parse(this.props.tableData);

    return (
      <_Table
        striped={striped}
        bordered={bordered}
        condensed={condensed}
        hover={hover}
      >
        <thead>
          <tr>
            {tableData &&
              tableData.head &&
              tableData.head.map(col => <th>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.rows &&
            tableData.rows.map(row => (
              <tr>
                {row.map(cell => {
                  if (cell && cell.colSpan) {
                    return <td colSpan={cell.colSpan}>{cell.data}</td>;
                  } else {
                    return <td>{cell}</td>;
                  }
                })}
              </tr>
            ))}
        </tbody>
      </_Table>
    );
  }
}
