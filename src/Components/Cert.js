import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PythonInfy from "../Assets/PythonInfy.jpg";
import infyintern from "../Assets/infosys4.0.png";
import Cosc from "../Assets/Cosc.jpg";
import 'react-multi-carousel/lib/styles.css';
import HackerrankPython from "../Assets/HackerrankPython.jpg";
import HackerrankSoftwareEngineerIntern from "../Assets/HackerrankSoftwareEngineerIntern.jpg";
import Gccp from "../Assets/Gccp.jpg";
import UdemyGit from "../Assets/UdemyGit.jpg";
import Forage from "../Assets/Forage.jpg";
import CourseraReact from "../Assets/CourseraReact.jpg";
import BharatIntern from "../Assets/BharatIntern.jpg";
import { Row,Col } from "react-bootstrap";
export default function Cert(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill1' id='cert'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2 className='cert'>Certifications</h2>
                        <p >These are the Credentials that validate my expertise and commitment to professional excellence.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className="item">
          <img src={PythonInfy} alt="python" />
          <h5>InfySpringboard</h5>
        </div>
        
        <div className="item">
          <img src={HackerrankSoftwareEngineerIntern} alt="hackerrank" />
          <h5>Hackerrank</h5>
        </div>
        {/* <div className="item">
          <img src={Gccp} alt="gccp" />
          <h5>GCCP Workshop</h5>
        </div> */}
        <div className="item">
          <img src={CourseraReact} alt="react" />
          <h5>Coursera</h5>
        </div>
        {/* <div className="item">
          <img src={Forage} alt="Forage" />
          <h5>Forage</h5>
        </div>
         */}
         <div className="item">
          <img src={infyintern} alt="infyintern" />
          <h5>Infosys Springboard Internship</h5>
        </div>
        <div className="item">
          <img src={BharatIntern} alt="bharatintern" />
          <h5>Bharat Intern</h5>
        </div>
        <div className="item">
          <img src={UdemyGit} alt="udemy" />
          <h5>Udemy</h5>
        </div>
        <div className="item">
          <img src={Cosc} alt="coc" />
          <h5>COSC CBIT</h5>
        </div>
        
        <div className="item">
          <img src={HackerrankPython} alt="python" />
          <h5>Hackerrank</h5>
        </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}
