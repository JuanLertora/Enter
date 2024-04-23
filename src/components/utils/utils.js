import logo from '../../assets/img/logoSvg.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import FbIcon from '../../assets/img/fb.svg';
import InstagramIcon from '../../assets/img/instagram.svg';
import es from '../../assets/img/flag-es.svg';
import pt from '../../assets/img/flag-bra.svg';
import us from '../../assets/img/flag-us.svg';
import projImg1 from "../../assets/img/projecto1.png";
import projImg2 from "../../assets/img/projecto2.png";
import projImg3 from "../../assets/img/projecto3.png";
import projImg4 from "../../assets/img/projecto4.png";
import projImg5 from "../../assets/img/projecto5.png";
import flame from "../../assets/img/projecto6.png";
export const particlesData = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

export const MediaIcon = {
  InstagramIcon,
  linkedinIcon,
  FbIcon,
  logo,
  es,
  pt,
  us
}

export const projectsDescription = {
  "es": [
    {
      title: "Club Santa Clara",
      description: "Diseño y Desarrollo"
    },
    {
      title: "NetGlobal Solutions",
      description: "Diseño y Desarrollo"
    },
    {
      title: "Tienda Flame",
      description: "Diseño y Desarrollo"
    },
    {
      title: "Netglobal Solutions",
      description: "Desarrollo"
    },
    {
      title: "Netglobal Solutions",
      description: "Desarrollo"
    },
    {
      title: "Netglobal Solutions",
      description: "Diseño y Desarrollo"
    },
  ],
  "pt": [
    {
      title: "Club Santa Clara",
      description: "Design e Desenvolvimento"
    },
    {
      title: "NetGlobal Solutions",
      description: "Design e Desenvolvimento"
    },
    {
      title: "Tienda Flame",
      description: "Design e Desenvolvimento"
    },
    {
      title: "Netglobal Solutions",
      description: "Desenvolvimento"
    },
    {
      title: "Netglobal Solutions",
      description: "Desenvolvimento"
    },
    {
      title: "Netglobal Solutions",
      description: "Design e Desenvolvimento"
    }
  ],
  "us": [
    {
      title: "Club Santa Clara",
      description: "Design and Development"
    },
    {
      title: "NetGlobal Solutions",
      description: "Design and Development"
    },
    {
      title: "Tienda Flame",
      description: "Design and Development"
    },
    {
      title: "Netglobal Solutions",
      description: "Development"
    },
    {
      title: "Netglobal Solutions",
      description: "Development"
    },
    {
      title: "Netglobal Solutions",
      description: "Design and Development"
    }
  ]
}
export const projectsTitle = {
  "es": 
    {
      title: "Proyectos",
      description: "Cada proyecto es una oportunidad para explorar nuevas tecnologías, implementar mejores prácticas de desarrollo y agregar valor tangible a través del diseño y la implementación de soluciones innovadoras. Mi objetivo es seguir creciendo como profesional y contribuir al crecimiento y éxito de proyectos desafiantes y emocionantes en el futuro."
    },
  "pt": 
    {
      title: "Projetos",
      description: "Cada projeto é uma oportunidade para explorar novas tecnologias, implementar melhores práticas de desenvolvimento e agregar valor tangível através do design e implementação de soluções inovadoras. Meu objetivo é continuar crescendo como profissional e contribuir para o crescimento e sucesso de projetos desafiadores e emocionantes no futuro."
    }
  ,
  "us": 
    {
      title: "Projects",
      description: "Each project is an opportunity to explore new technologies, implement best development practices, and add tangible value through the design and implementation of innovative solutions. My goal is to continue growing as a professional and contribute to the growth and success of challenging and exciting projects in the future."
    }
}

export const skills = {
  "es": 
    {
      title: "Habilidades",
      description: ["Tener habilidades destacadas es beneficioso porque te ayuda a,", "diferenciarte, demostrar relevancia, construir credibilidad, aumentar tu visibilidad y mantener un enfoque claro en tu desarrollo profesional."]
    },
  "pt": 
    {
      title: "Habilidades",
      description: ["Ter habilidades destacadas é benéfico porque ajuda a diferenciar-se,", "demonstrar relevância, construir credibilidade, aumentar sua visibilidade e manter um foco claro no seu desenvolvimento profissional."]
    }
  ,
  "us": 
    {
      title: "Skills",
      description:[ "Having standout skills is beneficial because it helps you,", "differentiate yourself, demonstrate relevance, build credibility, increase your visibility, and maintain a clear focus on your professional development."]
    }
}

export const projectImages = [projImg1, projImg2, flame,projImg3, projImg4, projImg5]

export const initialDescription = {
  "es": {  tag: "Bienvenido a mi Portfolio",  title: "Hola! Soy Juan Lertora",  description: "Soy un desarrollador web apasionado por crear experiencias digitales increíbles. A lo largo de los años, he trabajado arduamente para perfeccionar mis habilidades y ofrecer soluciones creativas y efectivas para mis clientes. ¡Contáctame para discutir tus ideas y proyectos - estoy deseando trabajar juntos!",  contact: "Contactame"},
"pt": {  tag: "Bem-vindo ao meu Portfolio",  title: "Olá! Eu sou Juan Lertora",  contact: "Contate-me",  description: "Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Ao longo dos anos, tenho trabalhado arduamente para aprimorar minhas habilidades e oferecer soluções criativas e eficazes para meus clientes. Entre em contato comigo para discutir suas ideias e projetos - estou ansioso para trabalhar juntos!"},
"us": {  tag: "Welcome to my Portfolio",  contact: "Contact Me",  title: "Hi! I'm Juan Lertora",  description:"I'm a web developer passionate about creating amazing digital experiences. Over the years, I've worked hard to hone my skills and deliver creative and effective solutions for my clients. Get in touch with me to discuss your ideas and projects - I'm looking forward to working together!",}
}

export const navBarTag = {
  "es": {inicio: "Inicio", habilidades: "Habilidades", proyectos: "Proyectos", work: "Trabajemos Juntos"},
  "pt": {inicio: "Início", habilidades: "Habilidades", proyectos: "Projetos", work: "Vamos trabalhar juntos"},
  "us": {inicio: "Home", habilidades: "Skills", proyectos: "Projects", work: "Let's work together"}
}

export const contactFormLabels = {
  "es": {contacto: "Contacto", nombre: "Nombre", email: "Correo Electrónico", mensaje: "Mensaje", derechos: "Todos los derechos reservados"},
  "pt": {contacto: "Contate-nos", nombre: "Nome", email: "E-mail", mensaje: "Mensagem", derechos: "Todos os direitos reservados"},
  "us": {contacto: "Contact Us", nombre: "Name", email: "Email", mensaje: "Message", derechos: "All rights reserved"}
}

export const contactFormMessages = {
  "es": {
    enviando: "Enviando...",
    exito: "El mensaje se envió correctamente",
    error: "Algo salió mal. Intente de nuevo más tarde.",
    enviar: "Enviar",
    completarCampos: "Por favor complete todos los campos obligatorios."
  },
  "pt": {
    enviando: "Enviando...",
    exito: "A mensagem foi enviada com sucesso",
    error: "Algo deu errado. Tente novamente mais tarde.",
    enviar: "Enviar",
    completarCampos: "Por favor, preencha todos os campos obrigatórios."
  },
  "us": {
    enviando: "Sending...",
    exito: "Message sent successfully",
    error: "Something went wrong. Please try again later.",
    enviar: "Send",
    completarCampos: "Please complete all required fields."
  }
}