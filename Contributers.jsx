import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Contributers.css";

function Contributers() {
  const contributors = [
    {
      name: "Rahul ,MD",
      title: "Partnering with all® free clear",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s",
    },
    {
      name: "Lalli, MD",
      title: "Board-certified dermatologist",
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Mary Alice, MD",
      title: "Double board-certified dermatologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWPYQXc4zUTfVfhBKAvyGjUUdP5wDWiheUQ&s",
    },
    {
      name: "Jenny C, MD, FAAD",
      title: "Associate Professor, Director, Skin of Color Program",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtGCN9hEOjMfN4uV4vFffb-WjolWh0m1vKg&s",
    },
  ];

  const [symptoms, setSymptoms] = useState([
    { symptom: "Abdominal pain", doctor: "" },
    { symptom: "Bloating", doctor: "" },
    { symptom: "Constipation", doctor: "" },
    { symptom: "Diarrhea", doctor: "" },
    { symptom: "Heartburn", doctor: "" },
  ]);

  const handleDoctorChange = (index, event) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index].doctor = event.target.value;
    setSymptoms(newSymptoms);
  };

  return (
    <div className="contributors">
      <h2>Contributors</h2>
      <motion.div
        className="contributors-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {contributors.map((contributor, index) => (
          <motion.div
            key={index}
            className="contributor-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <img src={contributor.img} alt={contributor.name} />
            <h3>{contributor.name}</h3>
            <p>{contributor.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <h2>Diagnosis And Management Of Arthritis</h2>
      <motion.div
        className="symptoms-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {symptoms.map((item, index) => (
          <motion.div
            key={index}
            className="symptom-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <p>
              <strong>Symptom:</strong> {item.symptom}
            </p>
            <input
              type="text"
              value={item.doctor}
              onChange={(event) => handleDoctorChange(index, event)}
              placeholder="Doctor's name"
            />
            {item.doctor && (
              <p>
                <strong>Doctor:</strong> {item.doctor}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Contributers;
