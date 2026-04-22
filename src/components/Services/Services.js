import React from "react";
import "./Services.css";
import { SERVICES } from "../../Util/data";

const Services = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="timeline-grid">
        {SERVICES.map((service, index) => (
          <article key={`${service.title}-${index}`} className="timeline-item">
            <div className="timeline-header">
              {service.icon ? (
                <div className="timeline-logo-wrap">
                  <img src={service.icon} alt={service.venue} className="timeline-logo" />
                </div>
              ) : null}
              <div className="timeline-heading">
                <h2>{service.title}</h2>
                {service.venue && <p className="timeline-venue">{service.venue}</p>}
                {service.date && <p className="timeline-date">{service.date}</p>}
              </div>
            </div>
            {service.link && (
              <a href={service.link} rel="noopener noreferrer" target="_blank" className="service-link">
                Activity Record
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
