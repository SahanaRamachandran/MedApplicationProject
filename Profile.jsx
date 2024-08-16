import React from "react";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import NavBar from "../components/NavBar";
import "./Home.css";
import ProfilePage from "./ProfilePage";
const App = () => {
  return (
    <div>
      <NavBar />
      <ProfilePage />
      <FooterNavBar />
      <Footer />
    </div>
  );
};
export default App;