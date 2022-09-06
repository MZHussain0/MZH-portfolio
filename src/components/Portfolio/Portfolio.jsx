import React, { useState } from "react";
import "./Portfolio.css";

import { projects } from "../constants/constants";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Creative Portfolio</h2>
      <span className="section__subtitle">Proof of my skills</span>

      <div className="portfolio__container container grid">
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <div className="portfolio__content" key={id}>
              <img className="portfolio__img" src={image} />
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
                <button href={visit} className="button__flex portfolio__link">
                  Code
                </button>
                <button href={source} className="button__flex  portfolio__link">
                  Live
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
