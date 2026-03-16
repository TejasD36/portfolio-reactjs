import { Col } from "react-bootstrap";
import { GooglePlay, Apple, Globe } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  tech = [],
  playStore,
  appStore,
  webUrl,
  featured,
}) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className={`project-card ${featured ? "featured" : ""}`}>
        {featured && <span className="featured-badge">Featured</span>}

        <div className="project-image">
          <img src={imgUrl} alt={title} />
        </div>

        <div className="project-content">
          <h4>{title}</h4>

          <p className="project-desc">{description}</p>

          <div className="project-tech">
            {tech.map((t, i) => (
              <span key={i} className="tech-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="project-links">
            {playStore && (
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                <GooglePlay size={16} />
                <span>Play Store</span>
              </a>
            )}

            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                <Apple size={16} />
                <span>App Store</span>
              </a>
            )}

            {webUrl && (
              <a
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn web-btn"
              >
                <Globe size={16} />
                <span>Web App</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
