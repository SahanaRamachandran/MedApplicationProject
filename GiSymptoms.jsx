import React from "react";
import CommonGISymptoms from "../components/CommonGISymptoms";
import Contributers from "../components/Contributers";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import Navbar from "../components/NavBar";
import Symptoms from "../components/Symptoms";

function GiSymptoms() {
  return (
    <div>
      <Navbar />
      <CommonGISymptoms />
      <Contributers />
      <Symptoms />
      <FooterNavBar />
      <Footer />
    </div>
  );
}

export default GiSymptoms;
