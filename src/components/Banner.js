import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { portfolioData } from "../constants/portfolioData";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = portfolioData.banner.roles;

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((current) => current + 1);
        setDelta(500);
      } else {
        setDelta(isDeleting ? 100 : 200);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [delta, isDeleting, loopNum, text, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="hero-status">
                    <span className="status-dot" aria-hidden="true" />
                    {portfolioData.banner.status}
                  </div>
                  <span className="tagline">
                    {portfolioData.banner.tagline}
                  </span>
                  <h1>
                    {portfolioData.banner.title}{" "}
                    <span
                      className="txt-rotate"
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>{portfolioData.banner.description}</p>
                  <div
                    className="hero-code"
                    role="group"
                    aria-label="Development focus"
                  >
                    <div className="hero-code-bar">
                      <span />
                      <span />
                      <span />
                      <code>tejas.dev</code>
                    </div>
                    {portfolioData.banner.codeLines.map((line) => (
                      <code className="hero-code-line" key={line}>
                        {line}
                      </code>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const section = document.getElementById("connect");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="developer illustration" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
