import * as React from "react";
import { Carousel as _Carousel, CarouselItem } from "../lib";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
  text: string;
  height: number;
  width: number;
  imagesSrc: string;
}

export class Carousel extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    height: 900,
    width: 500,
    imagesSrc:
      "https://via.placeholder.com/300.png/09f/fff,https://via.placeholder.com/300.png/f09/fff,https://via.placeholder.com/300.png/9f0/fff"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    height: { type: ControlType.Number, title: "Height" },
    width: { type: ControlType.Number, title: "Width" },
    images: { type: ControlType.String, title: "Images src" }
  };

  render() {
    const { imagesSrc, height, width } = this.props;
    return (
      <_Carousel
        prevIcon={
          <span className="carousel-control-prev">
            <span className="carousel-control-prev-icon" />
          </span>
        }
        nextIcon={
          <span className="carousel-control-next">
            <span className="carousel-control-next-icon" />
          </span>
        }
      >
        {imagesSrc.split(",").map(imageSrc => (
          <CarouselItem className="carousel-item">
            <img width={width} height={height} src={imageSrc} />
          </CarouselItem>
        ))}
      </_Carousel>
    );
  }
}
