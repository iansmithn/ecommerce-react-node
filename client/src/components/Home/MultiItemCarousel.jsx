import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { categories } from "./Categories";
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {
  return (
    <div>
      <Slider>
        {categories.map((item) => (
          <CarouselItem image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
