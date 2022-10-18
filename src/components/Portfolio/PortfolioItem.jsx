import React from "react";

const PortfolioItem = ({ item }) => {
  return (
    <div className="portfolio__items" key={item.id}>
      <img src={item.image} alt="" className="portfolio__img" />
      <h3 className="portfolio__title">{item.title}</h3>
      <h4 className="portfolio__subtitle">{item.description}</h4>
      <h5 className="portfolio__tags">
        <span>Tech Stack: </span>
        {item.tags}
      </h5>
      <div className="portfolio__links">
        <a
          href={item.source}
          target="_blank"
          className="button__flex portfolio__link"
        >
          Code <i className="bx bxl-github portfolio__icon"></i>
        </a>
        <a
          href={item.visit}
          target="_blank"
          className="button__flex  portfolio__link "
        >
          Live <i className="bx bx-right-arrow-alt portfolio__icon "></i>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
