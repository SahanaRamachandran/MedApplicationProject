import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Card from "../components/CardGrid";
import Content from "../components/Content";
import DoctorHome from "../components/DoctorHome";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import NavBar from "../components/NavBar";
import Tips from "../components/Tips";
import TopStories from "../components/TopStories";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCall = () => {
    navigate("/call"); // Navigate to /call page
  };

  return (
    <div style={styles.container}>
      <NavBar />
      <div>
        <header style={styles.homeHeader}>
          <h1>Welcome to MedScape</h1>
          <p>Your source for reliable health information.</p>
        </header>
      </div>
      <div style={styles.callContainer}>
        <button style={styles.callButton} onClick={handleCall}>
          Emergency Call
        </button>
      </div>
      <h1 className="health-tip-header" style={styles.sectionHeader}>
        Today's Health Tip
      </h1>
      <TopStories />
      <Tips />
      <DoctorHome />
      <h1 className="health-tip-header" style={styles.sectionHeader}>
        Tools, Trackers & Calculators
      </h1>
      <Card />
      <Content />
      <FooterNavBar />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  homeHeader: {
    backgroundColor: "#0073bb",
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sectionHeader: {
    color: "#0073bb",
    textAlign: "center",
    margin: "40px 0 20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  callContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
    padding: "0 20px",
  },
  callButton: {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;
