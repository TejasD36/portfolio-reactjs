import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { portfolioData } from "../constants/portfolioData";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const { mobileApps, otherProjects } = portfolioData.projects;
  const [showAllMobileApps, setShowAllMobileApps] = useState(false);
  const featuredMobileApps = mobileApps.filter((project) => project.featured);
  const orderedMobileApps = [
    ...featuredMobileApps,
    ...mobileApps.filter((project) => !project.featured),
  ];
  const visibleMobileApps = showAllMobileApps
    ? orderedMobileApps
    : featuredMobileApps;
  const featuredCount = featuredMobileApps.length;
  const totalProjects = mobileApps.length + otherProjects.length;

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
                  <div className="project-heading">
                    <span className="section-kicker">Selected Work</span>
                    <h2>Projects Built For Real Users</h2>

                    <p>
                      A curated look at production mobile apps, developer tools,
                      and web projects across fintech, healthcare, IoT,
                      delivery, travel, and community platforms.
                    </p>

                    <div className="project-stats" aria-label="Project summary">
                      <span>
                        <strong>{totalProjects}</strong>
                        Projects
                      </span>
                      <span>
                        <strong>{mobileApps.length}</strong>
                        Mobile apps
                      </span>
                      <span>
                        <strong>{featuredCount}</strong>
                        Featured
                      </span>
                    </div>
                  </div>

                  <Tab.Container defaultActiveKey="mobile">
                    <Nav
                      variant="pills"
                      className="nav-pills project-tabs mb-5 justify-content-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="mobile">
                          <span>Mobile Apps</span>
                          <strong>{mobileApps.length}</strong>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="otherProjects">
                          <span>Other Projects</span>
                          <strong>{otherProjects.length}</strong>
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
                        <Row className="project-grid">
                          {visibleMobileApps.map((project, index) => (
                            <ProjectCard
                              key={project.title}
                              {...project}
                              highlighted={project.featured && index === 0}
                            />
                          ))}
                        </Row>
                        <div className="projects-showcase-footer">
                          <span>
                            {showAllMobileApps
                              ? "Showing the complete mobile app archive."
                              : "Showing the strongest production highlights first."}
                          </span>
                          <button
                            type="button"
                            className="projects-toggle"
                            onClick={() =>
                              setShowAllMobileApps((current) => !current)
                            }
                            aria-expanded={showAllMobileApps}
                          >
                            {showAllMobileApps
                              ? "Back to featured"
                              : `View all ${mobileApps.length} mobile apps`}
                          </button>
                        </div>
                      </Tab.Pane>

                      {/* Other Projects */}
                      <Tab.Pane eventKey="otherProjects">
                        <Row className="project-grid">
                          {otherProjects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
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
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};
