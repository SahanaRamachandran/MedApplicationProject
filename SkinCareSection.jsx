import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./SkinCareSection.css";

function SkinCareSection() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const skinIssues = [
    "Acne",
    "Eczema",
    "Psoriasis",
    "Rosacea",
    "Sunburn",
    "Dry Skin",
    "Oily Skin",
    "Wrinkles",
    "Dark Spots",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(
      skinIssues.filter((issue) =>
        issue.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

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

  const images = [
    "https://vibrantskinbar.com/wp-content/uploads/best-natural-skin-care-routine.jpg",
    "https://assets.visme.co/templates/banners/thumbnails/i_Skin-Care-Product-Video-full_1.jpg",
    "https://www.sebamedindia.com/uploads/blog/main_1680529400.jpg",
    "https://m.media-amazon.com/images/I/51PhxwpFiwL.SL500.jpg",
  ];

  return (
    <div className="skin-care-section">
      <Slider {...sliderSettings} className="skin-care-slider">
        {images.map((image, index) => (
          <div key={index} className="skin-care-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className="skin-care-overlay">
              <div className="skin-care-text">
                <h1>Skin Care</h1>
                <p>Expert Blogs</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="skin-issue-search">
        <label htmlFor="skin-issue-input">Enter your skin issue:</label>
        <input
          type="text"
          id="skin-issue-input"
          value={query}
          onChange={handleInputChange}
          placeholder="Type to search..."
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SkinCareSection;
