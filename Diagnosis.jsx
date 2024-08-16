import React from "react";
import "./Diagnosis.css"; // Make sure you create and update this CSS file to style your component

// Data for Arthritis diagnosis and management
const arthritisInfo = [
  {
    name: "Diagnosis: Rheumatoid Arthritis",
    description:
      "Rheumatoid Arthritis is diagnosed through a combination of physical exams, blood tests for inflammatory markers, and imaging studies to assess joint damage.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrqTgo7vV4ZWsuVU7MUAvLWiJzN-Dv0AtrA&s",
    category: "Diagnosis",
  },
  {
    name: "Diagnosis: Osteoarthritis",
    description:
      "Osteoarthritis diagnosis involves physical exams and X-rays to detect joint space narrowing and bone spurs.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ2X-wXx9RcVoXXj30p7wqZsmLSsNsmOJXA&s",
    category: "Diagnosis",
  },
  {
    name: "Diagnosis: Gout",
    description:
      "Gout is diagnosed through symptoms and blood tests measuring uric acid levels, sometimes confirmed by joint fluid analysis.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7fwbx2EFj8qSGpuzCK49hHJKKEKJqcxTFA&s",
    category: "Diagnosis",
  },
  {
    name: "Diagnosis: Psoriatic Arthritis",
    description:
      "Psoriatic Arthritis diagnosis often involves joint examinations, X-rays, and blood tests to rule out other types of arthritis.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Yytj9TWDK6j7qbufHaH4zjE6vmUsBfrwg&s",
    category: "Diagnosis",
  },
  {
    name: "Management: Physical Therapy",
    description:
      "Physical therapy can improve mobility, strengthen muscles around joints, and reduce overall pain levels in arthritis patients.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUFUkmNo0OjxD1Hy7RHXpGAU55-3JfQJBTw&s",
    category: "Management",
  },
  {
    name: "Management: Medication",
    description:
      "Medications such as NSAIDs, corticosteroids, and DMARDs help manage pain and slow down the progression of arthritis.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCie84aDGKWQzPfBD3hzi5a2aNgzZAxcOiJw&s",
    category: "Management",
  },
  {
    name: "Management: Lifestyle Changes",
    description:
      "Maintaining a healthy weight, regular exercise, and a balanced diet are crucial in managing arthritis symptoms effectively.",
    img: "https://img.freepik.com/free-vector/lifestyle-diet-flat-design_23-2148494589.jpg",
    category: "Management",
  },
  {
    name: "Management: Surgery",
    description:
      "In severe cases, surgical interventions such as joint replacement may be necessary to relieve pain and restore function.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r4ypJfgs3pT3CFFsfQqvUvakYGiMu7pcjw&s",
    category: "Management",
  },
];

const Diagnosis = () => {
  const diagnosisInfo = arthritisInfo.filter(
    (info) => info.category === "Diagnosis"
  );
  const managementInfo = arthritisInfo.filter(
    (info) => info.category === "Management"
  );

  return (
    <div className="arthritis-diagnosis-management">
      <div className="arthritis-header">
        <h2>Diagnosis and Management of Arthritis</h2>
        <center>
          <p>
            Understanding the diagnosis and management options for arthritis can
            empower you to make informed decisions about your health care.
          </p>
        </center>
      </div>

      <div className="arthritis-info-list">
        <div className="arthritis-info-section diagnosis-section">
          <h3>Diagnosis</h3>
          {diagnosisInfo.map((info, index) => (
            <div key={index} className="arthritis-card diagnosis-card">
              <img src={info.img} alt={info.name} />
              <h4>{info.name}</h4>
              <p>{info.description}</p>
            </div>
          ))}
        </div>

        <div className="arthritis-info-section management-section">
          <h3>Management</h3>
          {managementInfo.map((info, index) => (
            <div key={index} className="arthritis-card management-card">
              <img src={info.img} alt={info.name} />
              <h4>{info.name}</h4>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
