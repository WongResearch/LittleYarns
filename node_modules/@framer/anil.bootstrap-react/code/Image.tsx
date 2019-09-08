import * as React from "react";
import { Image as _Image } from "../lib";
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
  src: string;
  responsive: boolean;
  rounded: boolean;
  circle: boolean;
  thumbnail: boolean;
  bsClass: string;
}

export class Image extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    src: "https://via.placeholder.com/150",
    responsive: true,
    rounded: true,
    circle: true,
    thumbnail: true,
    bsClass: "img"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    src: { type: ControlType.String, title: "Image source" },
    responsive: {
      type: ControlType.Boolean,
      title: "Responsive"
    },
    rounded: {
      type: ControlType.Boolean,
      title: "Rounded"
    },
    circle: {
      type: ControlType.Boolean,
      title: "Circle"
    },
    thumbnail: {
      type: ControlType.Boolean,
      title: "Thumbnail"
    }
  };

  render() {
    const { src, responsive, rounded, circle, thumbnail } = this.props;
    return (
      <_Image
        src={src}
        responsive={responsive}
        rounded={rounded}
        circle={circle}
        thumbnail={thumbnail}
      />
    );
  }
}
