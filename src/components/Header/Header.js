import React, { useState } from "react";
import "./Header.css";
import menuIcon from "../../img/menu2.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
  { href: "#publications", label: "Publications" },
  { href: "#talks", label: "Talks" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const smoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setShowLinks(false);
  };

  return (
    <header>
      <nav>
        <img
          src={menuIcon}
          onClick={() => setShowLinks(!showLinks)}
          className="menu-icon"
          alt="menu icon"
        />
        <ul className="nav-menu" id={showLinks ? "hidden" : ""}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(event) => smoothScroll(event, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
