import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import laptopImg from "../Assets/about.jpeg";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function About() {
  return (
    
    <Container fluid className="about-section" id='about'>
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1>
              Know Who <strong className="purple">I am</strong>{" "}
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hello Everyone!!
                    <br />I’m Sriya Kotagiriwar, a third-year Computer Science and Engineering student at CBIT, Hyderabad, aspiring to make a mark in the tech world as a Software Engineer.<br/>

💡 I specialize in Python and full-stack web development (React + Django), with a growing interest in Machine Learning. I’ve built real-world projects like an E-commerce platform with live delivery tracking, a speech-to-speech translation system (GloNaVox), and an automated email sender—each designed with user impact in mind.<br/>

🧑‍🔧 <b>My journey includes:</b><br/>

💼 2 industrial internships, including backend development with Infosys Springboard.<br/>

🌐 A live portfolio website (yes, this one!) showcasing everything I’ve built.<br/>

🏆 Shortlisted for DBS Bank Tech Apprentice Program and awarded Merit Certificates for academic excellence.<br/>

🚀 I actively contribute to the tech community as the Chair of IEEE Computer Society CBIT and mentor juniors through coding clubs. With over 300+ LeetCode problems solved, I’m committed to sharpening my problem-solving skills every day.<br/>

📌 Currently exploring: Streamlit tools, scalable backend systems, and multilingual tech solutions.<br/>
🤝 Always open to collaborations, internships, and meaningful tech conversations!<br/>

👉 Let’s connect and build something impactful!
                  </p>
                  <div style={{textAlign:'left'}}>
                  Apart from Coding,I love to
                  <ul >
                    <li className="about-activity">
                      <ImPointRight /> Play Games
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Dance
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Read about evolving technology
                    </li>
                  </ul>
                  <footer className="blockquote-footer">Sriya</footer></div>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" /> 
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
