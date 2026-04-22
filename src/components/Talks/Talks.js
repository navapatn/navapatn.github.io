import React from "react";
import "./Talks.css";
import { TALKS } from "../../Util/data";

const Talks = () => {
  if (!TALKS || TALKS.length === 0) return null;

  return (
    <section id="talks">
      <h1>Talks</h1>
      <div className="talks-grid">
        {TALKS.map((talk) => (
          <article key={talk.id} className="talk-card">
            {talk.image ? (
              <div className="talk-image-wrap">
                <img src={talk.image} alt={talk.title} className="talk-image" />
              </div>
            ) : null}
            <div className="talk-content">
              <h2>{talk.title}</h2>
              <p>{talk.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Talks;
