import React from "react";
import BlogPosts from "../components/BlogPosts";
import Contri from "../components/Contri";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import Navbar from "../components/NavBar";
import SkinCareSection from "../components/SkinCareSection";

function SkinCare() {
  return (
    <div>
      <Navbar />
      <SkinCareSection />
      <Contri />
      <BlogPosts />
      <FooterNavBar />
      <Footer />
    </div>
  );
}

export default SkinCare;
