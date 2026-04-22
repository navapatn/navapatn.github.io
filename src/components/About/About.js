import React from "react";
import "./About.css";
import { ABOUT_TEXT, RESEARCH_INTERESTS } from "../../Util/data";

const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-content" dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
      <div className="about-tags" aria-label="Research interests">
        {RESEARCH_INTERESTS.map((interest) => (
          <span key={interest} className="about-tag">
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
