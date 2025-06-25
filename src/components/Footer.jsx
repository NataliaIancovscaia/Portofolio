import { Container, Row,Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.png'

export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                 <Col size={12} sm={6}>
                   <img src={logo} alt="Logo"/>
                </Col> 

                <Col size={12} sm={6} className="text-center text-sm-end">
                   <div className="social-icon">
                    <a href="https://www.linkedin.com/in/natalia-iancovscaia-95b1a8223/"><img src={navIcon1} alt="Icon" /></a>
                    <a href="https://github.com/NataliaIancovscaia"><img src={navIcon2} alt="Icon" /></a>             
                  </div>
                </Col>
            </Row>
        </Container>

    </footer>
  )
}
