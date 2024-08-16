import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CommonGISymptoms.css"; // Ensure this path is correct

// Main component
function CommonGISymptoms() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Images for the slider
  const images = [
    "https://images.ctfassets.net/eexbcii1ci83/4q1jN8DzXax1elTghLbTca/0e332d24e2c894f3b1bf1888b1501108/Gastrointestinal_Diseases_Symptoms__Causes_and_Treatment.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObEyt5vjymUQklz9qC63-WPij_KeDG0KvPw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Q0EMr2INN3XCbXykLhelTU8wesQPzklD6A&s",
    "data:image/jpeg;base64,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",
  ];

  return (
    <div className="common-gi-symptoms">
      <h2>Common GI Symptoms</h2>
      <Slider {...sliderSettings} className="gi-symptoms-slider">
        {images.map((image, index) => (
          <div key={index} className="gi-symptoms-slide">
            <img src={image} alt={`Slide ${index + 1}`} />

            <div className="gi-symptoms-overlay">
              <div className="gi-symptoms-text">
                <h1>GI Health</h1>
                <p>Common Symptoms</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CommonGISymptoms;
