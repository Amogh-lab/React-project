import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-text">
        <h1>Resilient Roots AI</h1>
        <p>Empowering Farmers with Disease Recognition Technology</p>
        <div className="hero-btns">
          <a href="#result" className="btn">Get Started</a>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
