import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/hero.css";
import Id_picture from "../assets/image/id.png";

const Hero_part1: React.FC = () => {
    const staticText = "Hi, I'm ";
    const animatedText = "Owolabi Idowu";
    const [displayText, setDisplayText] = useState(" ");
    
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(animatedText.slice(0, index + 1));
        index++;
        if (index > animatedText.length) index = 0;
      }, 200);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="hero-container d-flex flex-column align-items-center justify-content-center text-white">
        {/* Hero Content */}
        <div className="hero-content d-flex flex-column flex-md-row align-items-center">
          <div className="text-left mb-4 mb-md-0 me-md-4">
            <p className="fs-5 fw-5 text-info"><b>I'M A  DEVELOPER</b></p>

   {/* Profile Image */}
        <div className="mt-3 mt-md-0">
            <img
              src={Id_picture}
              alt="Owolabi Idowu picture"
              className="profile-img"
            />
        </div>


            <h1 className="display-4 fw-bold">
              {staticText}
              <span className="highlight">{displayText}</span>
            </h1>
          </div>

       
        </div>
      </div>
    );
};

export default Hero_part1;
