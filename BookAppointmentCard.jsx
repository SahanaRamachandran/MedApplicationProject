import React from "react";
import { useNavigate } from "react-router-dom";
import doctorImage from "../pictures/doctor.jpeg"; // Path to your doctor image
const BookAppointmentCard = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/form");
  };
  return (
    <div className="card-container">
      <div className="appointment-card">
        <img src={doctorImage} alt="Doctor" className="card-image" />
        <h3>Book an Appointment</h3>
        <p>
          Schedule a consultation with one of our experienced doctors. Get
          personalized care and expert medical advice.
        </p>
        <button className="book-button" onClick={handleButtonClick}>
          Book Now
        </button>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Center vertically */
          padding: 20px;
        }
        .appointment-card {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          padding: 15px;
          max-width: 300px; /* Adjust the width to make it smaller */
          width: 100%; /* Ensure it fits within its container */
        }
        .card-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .appointment-card h3 {
          font-size: 1.5rem; /* Adjust font size */
          color: #333;
          margin-bottom: 10px;
        }
        .appointment-card p {
          color: #666;
          margin-bottom: 15px; /* Adjust margin */
          font-size: 0.9rem; /* Adjust font size */
        }
        .book-button {
          background-color: #2dbf56;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 20px; /* Adjust padding */
          font-size: 14px; /* Adjust font size */
          cursor: pointer;
        }
        .book-button:hover {
          background-color: #1f8f3d;
        }
      `}</style>
    </div>
  );
};
export default BookAppointmentCard;