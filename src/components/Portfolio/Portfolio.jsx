import React, { useState } from "react";
import "./Portfolio.css";

import { projects } from "./constants";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Creative Portfolio</h2>
      <span className="section__subtitle">Proof of my skills</span>

      <article className="portfolio__container container grid">
        {projects.map((item) => (
          <PortfolioItem item={item} key={item.id} />
        ))}
      </article>
    </section>
  );
};

export default Portfolio;
