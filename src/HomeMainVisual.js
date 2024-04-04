import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home_main_visual.css";
import ReadImage from './ReadImage';

export default function HomeMainVisual() {
  var settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };

  const logo_path = "./image/sample.jpg";
  const title_path = "./image/DESIGN MY OWN GAME.svg";

  return (
    <div className="slider-container">
        <Slider {...settings}>
          <ReadImage src={logo_path} alt="スライダー画像" />
          <ReadImage src={logo_path} alt="スライダー画像" />
          <ReadImage src={logo_path} alt="スライダー画像" />
          <ReadImage src={logo_path} alt="スライダー画像" />
          <ReadImage src={logo_path} alt="スライダー画像" />
          <ReadImage src={logo_path} alt="スライダー画像" />
        </Slider>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ReadImage className={"md:w-[360px] w-[140px] ml-[calc(50%-70px)]"} src={title_path} alt="キャッチコッピー" />
          <div className="font-[Noto-Sans-Bold] text-[12px] lg:text-[24px] text-[#fff] block mx-[0] my-[12px] text-center w-[360px]">
            「自分のゲームをデザインする」<br />
            愛知工業大学の開発サークル<br />
          </div>
        </div>
      </div>
  );
}
