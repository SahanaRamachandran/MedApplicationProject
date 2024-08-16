// src/components/CommonGISymptoms.js

import React from "react";
import "./Symptoms.css";

const giSymptoms = [
  {
    name: "Heartburn",
    description:
      "A burning sensation in your chest, usually after eating, which might be worse at night or when lying down.",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Bloating",
    description:
      "A feeling of fullness or swelling in your abdomen that often occurs after meals.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAu3hWu_CdQQlnsoyM-1hMNk4crq03Yw2Og&s",
  },
  {
    name: "Constipation",
    description:
      "Infrequent bowel movements or difficulty passing stools, which can cause discomfort and pain.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZ6ucRLNZnxBaT5dKRs_rYTVKzFgxloy6gw&s",
  },
  {
    name: "Diarrhea",
    description:
      "Loose, watery stools occurring more frequently than usual, often accompanied by abdominal cramps.",
    img: "https://img.freepik.com/premium-vector/man-sitting-toilet-bowl-having-diarrhea-illustration_138676-1003.jpg?w=2000",
  },
  {
    name: "Nausea",
    description:
      "A feeling of unease and discomfort in the stomach, often accompanied by an urge to vomit.",
    img: "https://img.freepik.com/premium-vector/people-sick-vomiting-nausea_153097-1535.jpg",
  },
  {
    name: "Abdominal Pain",
    description:
      "Pain or discomfort in the stomach area that can range from mild to severe and may be constant or intermittent.",
    img: "https://img.freepik.com/premium-vector/abdominal-pain-stomachache-concept-young-woman-hugging-her-belly-having-menstrual-cramps-healthcare-concept-cartoon-character-vector-illustration_529804-572.jpg?w=740",
  },
];

const Symptoms = () => {
  return (
    <div className="common-gi-symptoms">
      <h2>Common GI Symptoms</h2>
      <p>
        Understanding common gastrointestinal (GI) symptoms can help you
        identify potential issues early and seek appropriate care.
      </p>
      <div className="symptoms-list">
        {giSymptoms.map((symptom, index) => (
          <div key={index} className="symptom-card">
            <img src={symptom.img} alt={symptom.name} />
            <h3>{symptom.name}</h3>
            <p>{symptom.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Symptoms;
