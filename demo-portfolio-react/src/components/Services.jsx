import React from "react";
import { services } from "../data/servicesData";

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="service-item padd-15">
    <div className="service-item-inner">
      <div className="icon">
        <Icon className="fa" />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="service section" id="service">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>

        {/* Service Items */}
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
