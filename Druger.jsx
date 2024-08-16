import React, { useState } from "react";
import "./Druger.css"; // Ensure this CSS file is created

const drugRecoveryInfo = [
  {
    question: "What are the signs of drug addiction?",
    answer:
      "Signs of drug addiction include increased tolerance, withdrawal symptoms, neglecting responsibilities, and continued use despite negative consequences.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoWSLNI0O2jf0d4LDQyAqdHO9kzMHAx7jpQ&s",
  },
  {
    question: "How can one start the recovery process?",
    answer:
      "Starting recovery involves acknowledging the problem, seeking professional help, and developing a support network.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBwy-uLsEiQ0o98ZUYUibLKW5j6_Jo3WiCQ&s",
  },
  {
    question: "What are some effective drug recovery strategies?",
    answer:
      "Effective recovery strategies include therapy, medication-assisted treatment, support groups, and lifestyle changes.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uOZVLhJaytkuw1c1H85HnKdnEX-gCUPRQw&s",
  },
  {
    question: "How important is a support system in recovery?",
    answer:
      "A strong support system is crucial in recovery, providing emotional support, accountability, and encouragement.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZcKyNA5_B-eW5cFRgcuHrYRJvXWCQD3cnA&s",
  },
  {
    question: "Where can one find professional help?",
    answer:
      "Professional help can be found through rehabilitation centers, therapy services, and hotlines such as the Substance Abuse and Mental Health Services Administration (SAMHSA).",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IJl5bqCLRlrDni8ZqWprdEAGpEURIFraqA&s",
  },
];

const DrugRecovery = () => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const handleNextInfo = () => {
    if (currentInfoIndex < drugRecoveryInfo.length - 1) {
      setCurrentInfoIndex(currentInfoIndex + 1);
    }
  };

  const handlePreviousInfo = () => {
    if (currentInfoIndex > 0) {
      setCurrentInfoIndex(currentInfoIndex - 1);
    }
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div className="drug-recovery">
      <div className="recovery-header">
        <h2>Drug Recovery Information</h2>
        <p>
          Understanding the challenges of drug addiction and the recovery
          process is essential for providing support and finding effective
          solutions.
        </p>
      </div>

      <div className="drug-info-section">
        <h3>Interactive Question</h3>
        <div className="drug-info-card">
          <img
            src={drugRecoveryInfo[currentInfoIndex].img}
            alt={drugRecoveryInfo[currentInfoIndex].question}
          />
          <h4>{drugRecoveryInfo[currentInfoIndex].question}</h4>
          <p>{drugRecoveryInfo[currentInfoIndex].answer}</p>
          <textarea
            placeholder="Your answer here..."
            value={userAnswer}
            onChange={handleAnswerChange}
          />
          <div className="navigation-buttons">
            <button
              onClick={handlePreviousInfo}
              disabled={currentInfoIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextInfo}
              disabled={currentInfoIndex === drugRecoveryInfo.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugRecovery;
