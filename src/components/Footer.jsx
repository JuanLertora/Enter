import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logoSvg.svg";
import LinkedinIcon from "../assets/img/nav-icon1.svg";
/// import fbIcon from "../assets/img/nav-icon2.svg";
import InstagramIcon from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/juanlertora/" target="_blank"><img src={LinkedinIcon} alt="Icon" /></a>
              {/* <a href="#" target="_blank"><img src={fbIcon} alt="Icon"/></a> */}
              <a href="https://www.instagram.com/enter.agenciadigital/"target="_blank" ><img src={InstagramIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Todos los Derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
