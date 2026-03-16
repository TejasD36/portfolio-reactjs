import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { portfolioData } from "../constants/portfolioData";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const { mobileApps, experiments } = portfolioData.projects;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <p>
                    Some of the mobile applications and projects I have worked
                    on across different domains including fintech, healthcare,
                    IoT integrations, and delivery platforms.
                  </p>

                  <Tab.Container defaultActiveKey="mobile">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="mobile">Mobile Apps</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="experiments">
                          Learning Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Mobile Apps */}
                      <Tab.Pane eventKey="mobile">
                        <Row>
                          {mobileApps.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Learning Projects */}
                      <Tab.Pane eventKey="experiments">
                        <Row>
                          {experiments.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
