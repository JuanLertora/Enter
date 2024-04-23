import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import { IconCss3, IconExpress, IconHtml5, IconJs, IconNextjs, IconPython, IconReact } from "../utils/Icons";
import { skills } from '../utils/utils';

export const Skills = ({language}) => {
  const items = [
    { icon: <IconJs />, label: 'Javascript' },
    { icon: <IconReact />, label: 'React' },
    { icon: <IconNextjs />, label: 'NextJs' },
    { icon: <IconHtml5 />, label: 'Html' },
    { icon: <IconCss3 />, label: 'Css' },
    { icon: <IconPython />, label: 'Python' },
    { icon: <IconExpress />, label: 'Express' }
  ];
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{skills[language].title}</h2>
              <p>{skills[language].description[0]}<br></br><b>{skills[language].description[1]}</b></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                customTransition="transform 500ms ease-in-out"
                autoPlay={true}
                autoPlaySpeed={1000}>
                {items.map((item, index) => (
                  <div key={index} className={``}>
                    {item.icon}
                    <h5>{item.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
