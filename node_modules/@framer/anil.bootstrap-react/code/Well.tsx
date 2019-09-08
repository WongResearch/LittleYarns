import * as React from "react";
import { Well as _Well } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
    text: string;
}

export class Well extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        text: "Look I'm in a well!"
    };

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" }
    };

    render() {
        return <_Well>{this.props.text}</_Well>;
    }
}
