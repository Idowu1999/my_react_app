import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Id_picture from "../assets/image/id.png";

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState("skills");

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
    <div className="container text-secondary mt-5" style={{ fontFamily: "Arial, sans-serif", gap: "20px" }}>
      <div className="row align-items-center">
        {/* Profile Picture */}
        <div className="col-md-4 text-center">
          <img 
            src={Id_picture} 
            alt="Owolabi Idowu" 
            className="img-fluid rounded" 
            style={{ padding: "10px", borderRadius: "10px" }}
          />
        </div>
        
        {/* About Me Content */}
        <div className="col-md-8 mt-5">
          <h2 style={{ background: "linear-gradient(90deg, #A100FF, #FF007F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            About Me
          </h2>
          <p className="text-lg text-gray-800">
          I am a Computer Engineering professional with expertise in phone repair, system troubleshooting, and hardware maintenance. Additionally, I am a skilled developer specializing in website and mobile app development, creating functional and user-friendly applications. My proficiency extends to UI/UX design, where I craft intuitive and visually appealing interfaces to enhance user experiences. With a strong technical background and problem-solving abilities, I efficiently diagnose and resolve system issues while building innovative digital solutions.
          </p>
          
          {/* Tabs */}
          <div className="d-flex mb-3">
            <button 
              className="btn me-2" 
              style={{ background: activeTab === "skills" ? "#A100FF" : "#6DDAFF", color: "#FFFFFF" }} 
              onClick={() => setActiveTab("skills")}
            >Skills</button>
            <button 
              className="btn me-2" 
              style={{ background: activeTab === "experience" ? "#A100FF" : "#6DDAFF", color: "#FFFFFF" }} 
              onClick={() => setActiveTab("experience")}
            >Experience</button>
            <button 
              className="btn" 
              style={{ background: activeTab === "education" ? "#A100FF" : "#6DDAFF", color: "#FFFFFF" }} 
              onClick={() => setActiveTab("education")}
            >Education</button>
          </div>
          
          {/* Tab Content */}
          <div>
            {activeTab === "skills" && (
  <div className="p-4 text-lg text-gray-800">
  <ul className="list-none space-y-2">
    <li><i className="bi bi-cpu me-2" style={{ background: 'linear-gradient(45deg, #A100FF, #FF007F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>Computer Engineering</li>
    <li><i className="bi bi-phone me-2" style={{ background: 'linear-gradient(45deg, #FF007F, #6DDAFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>Phone Repair</li>
    <li><i className="bi bi-tools me-2" style={{ background: 'linear-gradient(45deg, #6DDAFF, #A100FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>System Troubleshooting and Hardware Maintenance</li>
    <li><i className="bi bi-code-slash me-2" style={{ background: 'linear-gradient(45deg, #A100FF, #FF007F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>Website Development</li>
    <li><i className="bi bi-phone-fill me-2" style={{ background: 'linear-gradient(45deg, #FF007F, #6DDAFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>Mobile App Development</li>
    <li><i className="bi bi-palette me-2" style={{ background: 'linear-gradient(45deg, #6DDAFF, #A100FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>UI/UX Design</li>
    <li><i className="bi bi-lightbulb me-2" style={{ background: 'linear-gradient(45deg, #A100FF, #FF007F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>Problem-Solving and Technical Diagnostics</li>
  </ul>
</div>          )}
            {activeTab === "experience" && (
              <p>
                {experience.map((exp, index) => (
                  <span key={index}><strong>{exp.position}</strong> at {exp.company} ({exp.year})<br /></span>
                ))}
              </p>
            )}
            {activeTab === "education" && (
              <p>
                {education.map((edu, index) => (
                  <span key={index}><strong>{edu.degree}</strong>, {edu.institution} ({edu.year})<br /></span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;