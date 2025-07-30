import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MediaIcon, navBarTag } from "../utils/utils";
import { HashLink } from 'react-router-hash-link';
import LanguageSelector from "../LanguageSelector/LanguageSelector";

export const NavBar = ({language, handleLanguageChange}) => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={MediaIcon.logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{navBarTag[language].inicio}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{navBarTag[language].habilidades}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{navBarTag[language].proyectos}</Nav.Link>
              <Nav.Link
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link"
              >
                  📄 {navBarTag[language].cv}
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/juanlertora/" target="_blank" ><img src={MediaIcon.linkedinIcon} alt="" /></a>
                {/* <a href="#" target="_blank"><img src={navIcon2} alt="" /></a> */}
                <a href="https://www.instagram.com/enter.agenciadigital/" target="_blank"><img src={MediaIcon.InstagramIcon} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>{navBarTag[language].work}</span></button>
              </HashLink>
              <div className="social-icon">
              <div style={{ height: 42, width: 42 }}><LanguageSelector language={language} handleLanguageChange={handleLanguageChange}/></div>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
