import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { portfolioData } from "../constants/portfolioData";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <svg style={{ height: 0 }}>
                <defs>
                  <linearGradient
                    id="skillGradient"
                    gradientTransform="rotate(90)"
                  >
                    <stop offset="0%" stopColor="#AA367C" />
                    <stop offset="100%" stopColor="#4A2FBD" />
                  </linearGradient>
                </defs>
              </svg>

              <h2>Skills</h2>
              <p>{portfolioData.skills.skillSummary}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {portfolioData.skills.skillsList.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-meter">
                      <CircularProgressbar
                        value={skill.level}
                        text={`${skill.level}%`}
                        styles={{
                          path: {
                            stroke: "url(#skillGradient)",
                            strokeWidth: 8,
                          },
                          trail: {
                            stroke: "#222",
                          },
                          text: {
                            fill: "#fff",
                            fontSize: "16px",
                            fontWeight: "600",
                          },
                        }}
                      />
                    </div>
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="skills background"
      />
    </section>
  );
};
