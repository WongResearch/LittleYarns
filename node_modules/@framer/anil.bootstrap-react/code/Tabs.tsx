import * as React from "react";
import { Tabs as _Tabs, Tab } from "../lib";
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
  defaultActiveKey: number;
  tabTitles: string;
  tabsBodyText: string;
}

export class Tabs extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    defaultActiveKey: 2,
    tabTitles: "Tab 1,Tab 2,Tab 3",
    tabsBodyText: "Tab 1 content,Tab 2 content,Tab 3 content"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    tabTitles: { type: ControlType.String, title: "Tab Titles" },
    tabsBodyText: { type: ControlType.String, title: "Body Text" },
    defaultActiveKey: {
      type: ControlType.Number,
      min: 1,
      title: "active key"
    }
  };

  render() {
    const { defaultActiveKey, tabTitles, tabsBodyText } = this.props;
    const tabTitlesArray = tabTitles.split(",");
    const tabsBodyTextArray = tabsBodyText.split(",");
    return (
      <_Tabs defaultActiveKey={defaultActiveKey} id={"tab-" + Date.now()}>
        {tabTitlesArray.map((tabTitle, index) => (
          <Tab eventKey={index + 1} title={tabTitle}>
            {tabsBodyTextArray[index]}
          </Tab>
        ))}
      </_Tabs>
    );
  }
}
