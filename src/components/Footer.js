import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { portfolioData } from "../constants/portfolioData";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Tejas Dudhal" loading="lazy" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <img src={navIcon1} alt="" />
              </a>

              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
              >
                <img src={navIcon2} alt="" />
              </a>

              <a
                href={portfolioData.social.email}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Tejas"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>{portfolioData.footer.copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
