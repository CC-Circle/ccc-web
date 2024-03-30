import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainVisual.css";
import ReadImage from './ReadImage';

export default function MainVisual() {
  var settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };

  const logo_path = "./image/sample.jpg";
  const title_path = "./image/DESIGN MY OWN GAME.svg";
  const slider_image_style = {
    width: '900px',
    height: '100%',
  };
  const catch_image_style = {
    height: '100%',
  };
  return (
    <>
      <div className="main-visual">
        <div className="slider-container">
          <Slider {...settings}>
              <ReadImage src={logo_path} alt="スライダー画像" style={slider_image_style} />
              <ReadImage src={logo_path} alt="スライダー画像" style={slider_image_style} />
              <ReadImage src={logo_path} alt="スライダー画像" style={slider_image_style} />
              <ReadImage src={logo_path} alt="スライダー画像" style={slider_image_style} />
              <ReadImage src={logo_path} alt="スライダー画像" style={slider_image_style} />
              <ReadImage src={logo_path} alt="スライダー画像" style={slider_image_style} />
          </Slider>
          <div className="catch-copy">
            <div className="title">
              <ReadImage src={title_path} alt="キャッチコッピー" styel={catch_image_style} />
            </div>
            <div className="subtitle">
              「自分のゲームをデザインする」<br />
              愛知工業大学の開発サークル<br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}