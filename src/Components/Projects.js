import React from "react";
import "./Projects.css";
const Projects = () => {
  const cards = [
    { id: 1, title: "GloNaVox", content:
         "Designed a speech translation system with real-time and recorded input support, integrating speech recognition, language translation, and speech synthesis for end-to-end audio translation across global languages using gTTS and Google Translate.    Do check out Readme!!",
        link:"https://github.com/Sriya987/GloNaVox" },
    { id: 2, title: "Backend of Sweetspot", content: "Contributed to the backend of the SweetSpot E-commerce platform using Django and Django REST Framework.Integrated customer management, cataloging, real-time delivery tracking using Google Maps API, and a secure admin dashboard.",
        link:"https://github.com/Sriya987/Sweetspot_ECommerce"
     },
    { id: 3, title: "Email Automator", content: "Built a Python tool using smtplib to automate bulk personalized emails with features like scheduling, dynamic templates, and contact book integration streamlining announcements, and invitations reducing manual effort and improving efficiency.",
        link:'https://github.com/Sriya987/EmailAutomator'
     },
     {id:4,title:"Portfolio (This one!)",content:"Developed and deployed a personal portfolio website to showcase projects, skills, and professional experience. The site includes interactive sections like project galleries, resume download, contact, and an achievements section.",
        link:'https://sriya987.github.io/Portfolio/'
     },
     {id:5,title:"ML models",content:'Built machine learning models for both credit card fraud detection and house price prediction using numpy, pandas and Scikit-learn.Achieved 96.97% test accuracy in fraud detection by optimizing preprocessing steps.',
        link:'https://github.com/Sriya987/CODTECH-Task1'
          }
  ];

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} className="floating-card">
          <h3>{card.title}</h3>
          <hr/>
          <p>{card.content}</p>
          <a href={card.link} target="_blank" rel="noopener noreferrer" >View Project</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
