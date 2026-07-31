import React from "react";
import "./Landing.css";
import { FaEnvelope, FaFileAlt, FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa";
import {
  ABOUT_TEXT,
  FULL_NAME,
  LANDING_SUBTITLE,
  PROFILE_HOVER_IMAGE,
  PROFILE_IMAGE,
  RESEARCH_INTERESTS,
  SOCIAL_LINKS,
} from "../../Util/data";
import { trackOutboundLink } from "../../Util/analytics";

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
      <div className="image-container">
        <img src={PROFILE_IMAGE} alt={FULL_NAME} className="default-image" />
        <img src={PROFILE_HOVER_IMAGE} alt={`${FULL_NAME} portrait`} className="hover-image" />
      </div>
      <div className="profile-content">
        <div className="profile-heading">
          <h1>{FULL_NAME}</h1>
          <h4 className="subtitle">{LANDING_SUBTITLE}</h4>
        </div>
        <div className="social-links-container">
          <div className="email-link">
            <FaEnvelope className="contact-icon" aria-hidden="true" />
            <div className="email-texts">
              {emailLinks.map((social, index) => (
                <React.Fragment key={social.link}>
                  <a
                    href={social.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={social.name}
                    onClick={() => trackOutboundLink(social.name, social.link, "profile")}
                  >
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
                  onClick={() => trackOutboundLink(social.name, social.link, "profile")}
                >
                  {Icon ? <Icon className="contact-icon" aria-hidden="true" /> : null}
                </a>
              );
            })}
          </div>
        </div>
        <div className="profile-biography" dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
        <div className="research-tags" aria-label="Research interests">
          {RESEARCH_INTERESTS.map((interest) => (
            <span key={interest} className="research-tag">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;
