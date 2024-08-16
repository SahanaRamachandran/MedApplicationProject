import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./BlogAndHealth.css"; // Ensure this path is correct

// Main component
function BlogAndHealth() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Images for the slider
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLNwvLNCzlHRjsfnYoEVntKHsqtW_C7sS0g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJmxUiuQGrORzHO5CDWSChgHTQ6XxOW1MYQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugdKUZvdtT0MVlodypZBXwNklJgpOFrsAVg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHteAtp-xGmv-g_c0mohxIK1uQ_3f3gFODqg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFme67qUedVo8AHvY5LeCQ43NSTqIEUiRzg&s",
  ];

  return (
    <div className="common-gi-symptoms">
      <h2>Diagnosis And Management Of Arthritis</h2>
      <Slider {...sliderSettings} className="gi-symptoms-slider">
        {images.map((image, index) => (
          <div key={index} className="gi-symptoms-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className="gi-symptoms-overlay">
              {/* You can uncomment this if you want text overlays */}
              {/* <div className="gi-symptoms-text">
                <h1> Health</h1>
                <p>Diagnosis And Management Of Arthritis</p>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BlogAndHealth;
