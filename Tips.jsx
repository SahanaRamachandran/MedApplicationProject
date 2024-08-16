import React from "react";
import "./Tips.css";
import subImage2 from "../pictures/healtykedney.avif";
import subImage3 from "../pictures/hiv.jpg";
import subImage1 from "../pictures/neckpain.jpeg";
import mainImage from "../pictures/simmersear.jpeg";
const TopStories = () => {
  return (
    <section className="top-stories">
      <h2>Today's Top Stories</h2>
      <div className="main-story">
        <img src={mainImage} alt="Main Story" />
        <div className="main-story-content">
          <h3>What Is Swimmer's Ear?</h3>
          <p>
            Swimmer's ear, an infection in the ear canal, is commonly linked to
            swimming in the ocean or a pool, but it can also occur on dry land.
            Find out the causes and symptoms of this painful ear infection.
          </p>
        </div>
      </div>
      <div className="sub-stories">
        <div className="sub-story">
          <img src={subImage1} alt="Neck Stretches for Pain Relief" />
          <p>Neck Stretches for Pain Relief</p>
        </div>
        <div className="sub-story">
          <img src={subImage2} alt="How to Maintain Healthy Kidneys" />
          <p>How to Maintain Healthy Kidneys</p>
        </div>
        <div className="sub-story">
          <img src={subImage3} alt="HIV: What Self Care Looks Like" />
          <p>HIV: What Self Care Looks Like</p>
        </div>
      </div>
    </section>
  );
};
export default TopStories;