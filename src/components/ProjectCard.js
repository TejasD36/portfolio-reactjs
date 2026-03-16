import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  tech = [],
  playStore,
  appStore,
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
                Play Store
              </a>
            )}

            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                App Store
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
