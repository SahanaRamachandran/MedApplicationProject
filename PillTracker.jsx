import React from "react";
import "./PillTracker.css";
import InputFileUpload from "./UploadFile.jsx"; 
import backgroundVideo from "../videos/pill.mp4";
const PillTracker = () => {
  return (
    <div className="pill-tracker-wrapper">
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="pill-tracker-container">
        <div className="pill-tracker-card">
          <h1 className="pill-tracker-heading">Pill Identifier</h1>
          <InputFileUpload />
        </div>
      </div>
    </div>
  );
};
export default PillTracker;