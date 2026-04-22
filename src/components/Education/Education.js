import React from "react";
import "../Services/Services.css";
import { EDUCATION } from "../../Util/data";

const Education = () => {
  return (
    <section id="education">
      <h1>Education</h1>
      <div className="timeline-grid">
        {EDUCATION.map((entry, index) => (
          <article key={`${entry.degree}-${index}`} className="timeline-item">
            <div className="timeline-header">
              {entry.icon ? (
                <div className="timeline-logo-wrap">
                  <img src={entry.icon} alt={entry.institution} className="timeline-logo" />
                </div>
              ) : null}
              <div className="timeline-heading">
                <h2>{entry.degree}</h2>
                {entry.institution && <p className="timeline-venue">{entry.institution}</p>}
                {entry.date && <p className="timeline-date">{entry.date}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
