import React from "react";
import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  thumbnail,
  liveDemo,
  sourceCode,
  video,
}) {
  return (
    <div className="project-card">
      <img src={thumbnail} alt={title} className="project-thumbnail" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-buttons">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn demo-btn"
              onClick={(e) => !liveDemo && e.preventDefault()}
            >
              Live Demo
            </a>
          )}
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="btn video-btn"
            >
              Video
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn code-btn"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
