import React from "react";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import NavBar from "../components/NavBar";
import PillTracker from "../components/PillTracker";
import "./Home.css";
const App = () => {
  return (
    <div>
      <NavBar />
      <PillTracker />
      <FooterNavBar />
      <Footer />
    </div>
  );
};
export default App;