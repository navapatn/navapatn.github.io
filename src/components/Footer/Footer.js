import React from "react";
import "./Footer.css";
import { FOOTER_TEXT } from "../../Util/data";

const Footer = () => {
  return (
    <footer>
      <p>
        {FOOTER_TEXT.text}
        <a href={FOOTER_TEXT.link} target="_blank" rel="noopener noreferrer">
          {FOOTER_TEXT.linkText}
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
