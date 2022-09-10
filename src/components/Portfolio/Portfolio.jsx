import React, { useState } from "react";
import "./Portfolio.css";

import { projects } from "../constants/constants";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Creative Portfolio</h2>
      <span className="section__subtitle">Proof of my skills</span>

      <article className="portfolio__container container grid">
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <div className="portfolio__items" key={id}>
              <div className="portfolio__img">
                <img src={image} />
              </div>
              <div className="portfolio__title">{title}</div>
              <div className="portfolio__subtitle">{description}</div>
              <div className="portfolio__tags">
                {tags.map((tag, i) => (
                  <div className="portfolio__tag" key={i}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="portfolio__links">
                <a
                  href={visit}
                  target="_blank"
                  className="button__flex portfolio__link button-glow portfolio__link-border"
                >
                  GitHub
                </a>
                <a
                  href={source}
                  target="_blank"
                  className="button__flex  portfolio__link "
                >
                  Live Demo
                </a>
              </div>
            </div>
          )
        )}
      </article>
    </section>
  );
};

export default Portfolio;
