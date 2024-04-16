import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ParticleComponent from "./Particles";
import { particlesData } from "./utils";

export const Banner = () => {
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const period = 2000;
  useEffect(() => {
    const ticker = () =>{
      setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % toRotate.length);
      }, period);
      return () => { clearInterval(ticker) };
    }
    ticker()
  }, [])

  const scrollToSection = () => {
    const section = document.getElementById("connect");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home"> 
      <ParticleComponent data={particlesData} />
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenido a mi Portfolio</span>
                  <h1>{`Hola! Soy Juan Lertora `}</h1>
                  <h1 className="animationText">{toRotate[index]}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={scrollToSection}>Contactame <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}
