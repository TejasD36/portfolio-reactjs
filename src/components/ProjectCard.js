import { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import {
  Apple,
  ArrowRight,
  Github,
  Globe,
  GooglePlay,
} from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  tech = [],
  playStore,
  appStore,
  webUrl,
  githubUrl,
  pubDevUrl,
  featured,
  highlighted,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = () => setShowDetails(true);
  const closeDetails = () => setShowDetails(false);
  const visibleTech = tech.slice(0, 3);
  const hiddenTechCount = Math.max(tech.length - visibleTech.length, 0);

  const projectLinks = (compact = false) => (
    <div className={compact ? "project-platforms" : "project-links"}>
      {playStore && (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "platform-icon" : "store-btn"}
          aria-label={`Open ${title} on Google Play`}
          title="Google Play"
        >
          <GooglePlay size={compact ? 18 : 16} />
          {!compact && <span>Play Store</span>}
        </a>
      )}

      {appStore && (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "platform-icon" : "store-btn"}
          aria-label={`Open ${title} on the App Store`}
          title="App Store"
        >
          <Apple size={compact ? 19 : 16} />
          {!compact && <span>App Store</span>}
        </a>
      )}

      {webUrl && (
        <a
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "platform-icon" : "store-btn web-btn"}
          aria-label={`Open ${title} web app`}
          title="Web App"
        >
          <Globe size={compact ? 18 : 16} />
          {!compact && <span>Web App</span>}
        </a>
      )}

      {pubDevUrl && (
        <a
          href={pubDevUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "platform-icon" : "store-btn web-btn"}
          aria-label={`Open ${title} on pub.dev`}
          title="pub.dev"
        >
          <Globe size={compact ? 18 : 16} />
          {!compact && <span>pub.dev</span>}
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? "platform-icon" : "store-btn github-btn"}
          aria-label={`Open ${title} source code on GitHub`}
          title="GitHub"
        >
          <Github size={compact ? 18 : 16} />
          {!compact && <span>GitHub</span>}
        </a>
      )}
    </div>
  );

  return (
    <Col
      xs={12}
      sm={6}
      lg={4}
      className={`project-card-col ${
        highlighted ? "project-card-col-feature" : ""
      }`}
    >
      <article
        className={`project-card ${featured ? "featured" : ""} ${
          highlighted ? "highlighted" : ""
        }`}
      >
        <div className="project-image">
          {featured && <span className="featured-badge">Featured</span>}
          <button
            type="button"
            className="project-preview-trigger"
            onClick={openDetails}
            aria-label={`View details for ${title}`}
          >
            <img src={imgUrl} alt={`${title} app preview`} loading="lazy" />
          </button>
        </div>

        <div className="project-content">
          <div className="project-title-row">
            <h3 className="project-title">{title}</h3>
            {projectLinks(true)}
          </div>

          <p className="project-card-desc">{description}</p>

          <div className="project-tech project-tech-preview">
            {visibleTech.map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
            {hiddenTechCount > 0 && (
              <span className="tech-tag tech-tag-muted">
                +{hiddenTechCount}
              </span>
            )}
          </div>

          <button
            type="button"
            className="project-details-action"
            onClick={openDetails}
          >
            View details
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </article>

      <Modal
        show={showDetails}
        onHide={closeDetails}
        centered
        size="lg"
        dialogClassName="project-modal-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="project-modal-body">
          <img src={imgUrl} alt={`${title} preview`} loading="lazy" />
          <p className="project-desc">{description}</p>
          <div className="project-tech">
            {tech.map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
          {projectLinks()}
        </Modal.Body>
      </Modal>
    </Col>
  );
};
