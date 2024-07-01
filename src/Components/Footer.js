import { Container,Row} from "react-bootstrap";
import navIcon1 from '../Assets/linkedin.jpeg';
import navIcon2 from '../Assets/email.jpeg'
import navIcon3 from '../Assets/insta.jpeg';

function Footer() {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center"  >
              <div className="social-icon p-4" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <a href="https://www.linkedin.com/in/sriya-kotagiriwar/"><img  style={{height:'30px',width:'30px',margin:'10px',borderRadius:'8px'}} src={navIcon1} alt="Icon" /></a>
                <a href="mailto:kotagiriwarshriya@gmail.com"><img style={{height:'30px',width:'30px',margin:'10px',borderRadius:'8px'}}  src={navIcon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/sriyaaa.19?igsh=cXY1ODF6cTBxMWs0"><img src={navIcon3}  style={{height:'30px',width:'30px',margin:'10px',borderRadius:'8px'}} alt="Icon" /></a>
              </div>
              <p style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Copyright 2024. All Rights Reserved</p>
          </Row>
        </Container>
      </footer>
    )
  }
  export default Footer;