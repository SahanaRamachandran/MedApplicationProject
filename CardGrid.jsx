import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.css";
import image1 from "../pictures/bmi.jpeg";
import image3 from "../pictures/firstaid.jpeg";
import image2 from "../pictures/pill.jpeg";
const Card = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="card-link">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};
const CardGrid = () => {
  return (
    <div className="card-grid">
      <Card
        link="/bmi"
        image={image1}
        title="BMI Calculator"
        description="Track your BMI"
      />
      <Card
        link="/pill"
        image={image2}
        title="Pill Identifier"
        description="Manage your pill intake"
      />
      <Card
        link="/firstaid"
        image={image3}
        title="First Aid"
        description="Emergency first aid tips"
      />
    </div>
  );
};
export default CardGrid;