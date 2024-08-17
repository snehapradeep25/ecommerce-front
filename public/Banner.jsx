import React from "react";
import Slider from "react-slick";
import banner1 from './images/banners/banner1.jpg';
import mb2 from './images/banners/mb2.jpg';
import mb1 from './images/banners/mb1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src={mb1}  />
        </div>
        <div>
          <img src={mb2} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
