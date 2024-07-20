import { Container,Row,Col } from "react-bootstrap";
import email from '../Assets/email.jpeg';
import linkedin from '../Assets/linkedin.jpeg'
import insta from '../Assets/insta.jpeg';
import leetcode from '../Assets/leetcode.jpeg';
import hackerrank from '../Assets/hackerrank.jpeg';
import github1 from '../Assets/github.jpeg';

export default function Contact(){
    return(
        <Container>
            <div className="contact">
            <Row>
                <Col ><a href="mailto:kotagiriwarshriya@gmail.com"><img className="contact-item ml" src={email} alt='email'/></a>
                </Col>
                <Col ><a href='https://www.linkedin.com/in/sriya-kotagiriwar/'><img className="contact-item" src={linkedin} alt='linkedin' style={{borderRadius:'25px'}}/></a>
                </Col>
                <Col ><a href="https://www.instagram.com/sriyaaa.19?igsh=cXY1ODF6cTBxMWs0"><img src={insta} className="contact-item" alt='insta' style={{borderRadius:'30px'}}/></a>
                </Col>
            </Row>
            <Row>
                <Col><a href="https://leetcode.com/u/PyTechie/"><img className="contact-item lc" src={leetcode} alt="leetcode"/></a>
                </Col>
                <Col ><a href="https://www.hackerrank.com/profile/sriyakotagiriwar"><img className="contact-item hr" src={hackerrank} alt='hackerrank' /></a>
                </Col>
                <Col ><a href="https://github.com/Sriya987/"><img className="contact-item" src={github1} alt='github' style={{borderRadius:'50px',width:'110px'}}/></a>
                </Col>
            </Row></div>
        </Container>
    )
}