import React, { useEffect, useState } from "react";

import bloodDonationImage from "../pictures/blood.jpeg"; // Path to your image
import boneMarrowIcon from "../pictures/bone.jpeg";
import brainSurgeryIcon from "../pictures/brain.jpeg";
import cancerIcon from "../pictures/brest.jpeg";
import covidIcon from "../pictures/covid.jpeg";
import smaIcon from "../pictures/dna.jpeg";
import heartIcon from "../pictures/heart.jpeg";
import kidneyTransplantIcon from "../pictures/kidney.jpeg";
import liverTransplantIcon from "../pictures/liver.jpeg";
import pretermBabyIcon from "../pictures/pediatrics.jpeg";

const FundraisingSection = () => {
  const items = [
    { title: "Heart Transplant", raised: "₹49 Lakhs", icon: heartIcon },
    { title: "Cancer Crowdfunding", raised: "₹2 Crores", icon: cancerIcon },
    { title: "Spinal Muscular Atrophy", raised: "₹16 Crores", icon: smaIcon },
    {
      title: "Bone Marrow Transplant",
      raised: "₹61 Lakhs",
      icon: boneMarrowIcon,
    },
    { title: "Covid-19 Support", raised: "₹69 Lakhs", icon: covidIcon },
    { title: "Preterm Baby Care", raised: "₹40 Lakhs", icon: pretermBabyIcon },
    {
      title: "Liver Transplant",
      raised: "₹35 Lakhs",
      icon: liverTransplantIcon,
    },
    { title: "Brain Surgery", raised: "₹23 Lakhs", icon: brainSurgeryIcon },
    {
      title: "Kidney Transplant",
      raised: "₹46 Lakhs",
      icon: kidneyTransplantIcon,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1500); // Change slide every 1.5 seconds for faster scrolling
    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const visibleItems = [];
  for (let i = 0; i < 4; i++) {
    visibleItems.push(items[(currentIndex + i) % items.length]);
  }

  return (
    <div className="fundraising-section">
      <h2>Raise Funds For Your Treatment</h2>
      <p>
        No matter the treatment, no matter the cost, raise money for your
        medical treatment online.
      </p>
      <div className="items-container">
        <button className="nav-button" onClick={prevSlide}>
          {"<"}
        </button>
        <div className="carousel">
          {visibleItems.map((item, index) => (
            <div key={index} className="item">
              <img src={item.icon} alt={item.title} className="icon" />
              <h4>{item.title}</h4>
              <p>Maximum Raised</p>
              <p>{item.raised}</p>
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={nextSlide}>
          {">"}
        </button>
      </div>
      <div className="blood-donation-card">
        <img
          src={bloodDonationImage}
          alt="Blood Donation"
          className="card-image"
        />
        <h3>Support Blood Donation</h3>
        <p>
          Blood donation is a crucial part of medical care. Your support can
          help save lives and make a significant impact on those in need.
        </p>
        <button className="donate-button">Donate Now</button>
      </div>
      <style jsx>{`
        .fundraising-section {
          text-align: center;
          padding: 20px;
        }

        .fundraising-section h2 {
          font-size: 2.5rem;
          color: #333;
        }

        .fundraising-section p {
          color: #666;
          margin-bottom: 20px;
        }

        .items-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .nav-button {
          background: none;
          border: none;
          font-size: 2.5rem;
          cursor: pointer;
        }

        .carousel {
          display: flex;
          overflow: hidden;
          width: 90%; /* Adjust width to fit 4 items properly */
        }

        .item {
          flex: 0 0 23%; /* Show 4 items at a time */
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .item .icon {
          width: 120px; /* Larger icon size */
          height: 120px;
          margin: 0 auto 15px;
        }

        .item h4 {
          font-size: 1.5rem;
          color: #333;
          margin: 15px 0;
        }

        .item p {
          color: #666;
          margin: 5px 0;
        }

        .blood-donation-card {
          margin-top: 30px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .card-image {
          width: 200px; /* Larger card image size */
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .blood-donation-card h3 {
          font-size: 1.8rem;
          color: #2dbf56;
          margin-bottom: 10px;
        }

        .blood-donation-card p {
          color: #666;
          margin-bottom: 20px;
        }

        .donate-button {
          background-color: #2dbf56;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 12px 25px;
          font-size: 18px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
export default FundraisingSection;