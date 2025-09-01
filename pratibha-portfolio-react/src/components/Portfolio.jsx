import React from "react";
import { portfolioItems } from "../data/portfolioData";

const Card = ({ img, title, desc, link }) => (
  <div className="portfolio-item padd-15">
    <div className="portfolio-item-inner shadow-dark">
      <div className="portfolio-img">
        <img src={img} alt={title} />
      </div>
      <div className="portfolio-item-info padd-15">
        <h4>{title}</h4>
        <p>{desc}</p>
        <a href={link} target="_blank" rel="noreferrer" className="btn">
          View Project
        </a>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>

        {/* Heading */}
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="row">
          {portfolioItems.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
