import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Id_picture from "../assets/image/id.png";

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    "Detail Oriented",
    "Excellent Communication & Organizational Skills",
    "Able to Work Under Any Situation",
    "Hardworking",
    "Able to Carry Out Assigned Duties",
  ];

  const experience = [
    { position: "SIWES", company: "Nigerian Institute of Social and Economic Research (NISER)", year: "2019" },
    { position: "Industrial Training", company: "International Institute of Tropical Agriculture", year: "2021-2022" },
    { position: "Computer Teacher/Operator", company: "The Vine Nur/Pry School, Olorisa-oko Ibadan", year: "2018" },
    { position: "Computer Teacher/Operator", company: "Success Nur/Pry School, Ife South, Osun State", year: "2017-2018" },
  ];

  const education = [
    { degree: "Higher National Diploma in Computer Engineering", institution: "The Polytechnic Ibadan", year: "2021 - 2024" },
    { degree: "National Diploma in Computer Engineering", institution: "The Polytechnic Ibadan", year: "2020 - 2021" },
    { degree: "Senior Secondary School Certificate Examination (SSCE)", institution: "Baptist Grammar School Mefoworade, Ife South, Osun State", year: "2012 - 2017" },
  ];

  return (
    <div className="container text-secondary mt-5">
      <div className="row align-items-center">
        {/* Profile Picture */}
        <div className="col-md-4 text-center">
          <img src={Id_picture} alt="Owolabi Idowu" className="img-fluid rounded" />
        </div>
        
        {/* About Me Content */}
        <div className="col-md-8">
          <h2 className="fw-bold">About Me</h2>
          <p>
            A graduate in Computer Engineering, seeking to build a career in an organization where
            my skills and knowledge can be judiciously utilized to achieve organizational goals.
          </p>
          
          {/* Tabs */}
          <div className="d-flex mb-3">
            <button className={`btn me-2 ${activeTab === "skills" ? "btn-danger" : "btn-outline-danger"}`} onClick={() => setActiveTab("skills")}>Skills</button>
            <button className={`btn me-2 ${activeTab === "experience" ? "btn-danger" : "btn-outline-danger"}`} onClick={() => setActiveTab("experience")}>Experience</button>
            <button className={`btn ${activeTab === "education" ? "btn-danger" : "btn-outline-danger"}`} onClick={() => setActiveTab("education")}>Education</button>
          </div>
          
          {/* Tab Content */}
          <div>
            {activeTab === "skills" && (
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
            {activeTab === "experience" && (
              <ul>
                {experience.map((exp, index) => (
                  <li key={index}><strong>{exp.position}</strong> at {exp.company} ({exp.year})</li>
                ))}
              </ul>
            )}
            {activeTab === "education" && (
              <ul>
                {education.map((edu, index) => (
                  <li key={index}><strong>{edu.degree}</strong>, {edu.institution} ({edu.year})</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
