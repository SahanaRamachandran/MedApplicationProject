import React from "react";
import tipImage from "../pictures/tips.webp";
import "./TopStories.css";
const HealthTip = () => {
  const tip = {
    imgSrc: tipImage,
    title: "Stay Hydrated",
    content:
      "Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly. Being well-hydrated also improves sleep quality, cognition, and mood. Aim to drink at least 8 cups (2 liters) of water daily, and more if you're active or it's hot outside. Remember, your body is about 60% water, and staying hydrated helps maintain the balance of bodily fluids.",
  };
  return (
    <div className="health-tip">
      <div className="image-container">
        <img src={tip.imgSrc} alt="Health Tip" className="tip-image" />
      </div>
      <div className="tip-content">
        <h2 className="tip-title">{tip.title}</h2>
        <p className="tip-text">{tip.content}</p>
      </div>
    </div>
  );
};
export default HealthTip;