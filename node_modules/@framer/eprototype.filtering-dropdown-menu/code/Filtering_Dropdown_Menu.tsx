import * as React from "react";

const options1 = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" }
];

const options2 = [
  { value: "one-a", label: "One A", link: "one" },
  { value: "one-b", label: "One B", link: "one" },
  { value: "two-a", label: "Two A", link: "two" },
  { value: "two-b", label: "Two B", link: "two" }
];

export class Filtering_Dropdown_Menu extends React.Component<{}, any> {
    
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: { value: "one" },
          selectedOption2: { value: "" }
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
      }

    handleChange1(e) {
        console.log(e);
        this.setState({
          selectedOption: { value: e.target.value }
        });
      };
    
      handleChange2(e){
        this.setState({
          selectedOption2: { value: e.target.value }
        });
      };
    
      render() {
        const filteredOptions = options2.filter(
          o => o.link === this.state.selectedOption.value
        );
    
        return (
          <div>
            <div>
              <label>Select one</label>
              <select
                value={this.state.selectedOption.value}
                onChange={this.handleChange1}
              >
                {options1.map(tag => (
                  <option>{tag.value}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Then the other</label>
              <select
                value={this.state.selectedOption2.value}
                onChange={this.handleChange2}
              >
                {filteredOptions.map(tag => (
                  <option>{tag.value}</option>
                ))}
              </select>
            </div>
          </div>
        );
      }
}