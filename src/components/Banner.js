import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
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

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100); // faster delete
    } else {
      setDelta(200); // normal typing
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // pause before deleting
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500); // pause before next word
    }
  };

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text]);

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
                  <span className="tagline">
                    {portfolioData.banner.tagline}
                  </span>
                  <h1>
                    {portfolioData.banner.title}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate={JSON.stringify(portfolioData.banner.roles)}
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>{portfolioData.banner.description}</p>
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
