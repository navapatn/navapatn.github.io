import React from "react";
import "./Landing.css";
import { FaEnvelope, FaFileAlt, FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa";
import {
  FULL_NAME,
  LANDING_DESCRIPTION,
  LANDING_SUBTITLE,
  PROFILE_HOVER_IMAGE,
  PROFILE_IMAGE,
  SOCIAL_LINKS,
} from "../../Util/data";

const ICON_MAP = {
  email: FaEnvelope,
  scholar: FaGraduationCap,
  linkedin: FaLinkedin,
  github: FaGithub,
  cv: FaFileAlt,
};

const Landing = () => {
  const emailLinks = SOCIAL_LINKS.filter((social) => social.showText);
  const iconLinks = SOCIAL_LINKS.filter((social) => !social.showText);

  return (
    <section id="landing" className="landing">
      <div className="text-content">
        <h1>{FULL_NAME}</h1>
        <h4 className="subtitle">{LANDING_SUBTITLE}</h4>
        {LANDING_DESCRIPTION ? <p className="landing-description">{LANDING_DESCRIPTION}</p> : null}
        <div className="social-links-container">
          <div className="email-link">
            <FaEnvelope className="contact-icon" aria-hidden="true" />
            <div className="email-texts">
              {emailLinks.map((social, index) => (
                <React.Fragment key={social.link}>
                  <a href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                    <span className="email-text">{social.text}</span>
                  </a>
                  {index < emailLinks.length - 1 && <span className="email-separator">,&nbsp;</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="icon-links">
            {iconLinks.map((social) => {
              const Icon = ICON_MAP[social.icon];

              return (
                <a
                  key={social.link}
                  href={social.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.name}
                >
                  {Icon ? <Icon className="contact-icon" aria-hidden="true" /> : null}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={PROFILE_IMAGE} alt={FULL_NAME} className="default-image" />
        <img src={PROFILE_HOVER_IMAGE} alt={`${FULL_NAME} portrait`} className="hover-image" />
      </div>
    </section>
  );
};

export default Landing;
