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
                    <br /> This is{" "}
                    <span className="purple">Sriya Kotagiriwar.</span>
                    <br/>
                    <br />I am a driven second-year Computer Science and
                    Engineering student at Chaitanya Bharathi Institute of
                    Technology. My passion for technology and innovation fuels
                    my journey in this dynamic field, where I continually
                    explore how software shapes our world.<br/><br/> Specializing in the
                    programming language Python, I possess hands-on experience
                    in web development and data structures. I have achieved
                    notable success in developing web applications and an
                    E-commerce platform, showcasing my ability to turn ideas
                    into real-world solutions. Committed to lifelong learning
                    and adept at problem-solving, my goal is to utilize my
                    skills to create impactful technological solutions that
                    bridge the gap between innovation and practical
                    applications.<br/><br/> I aspire to make a meaningful difference in
                    people's lives through the power of technology. I welcome
                    opportunities for collaboration and engaging discussions on
                    all things tech. Feel free to connect with me for a fruitful
                    exchange of ideas or potential partnerships.
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
