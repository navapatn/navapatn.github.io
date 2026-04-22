import React, { useEffect, useState } from "react";
import "./ScrollButton.css";
import { FaChevronUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(document.documentElement.scrollTop > 200);
    };

    window.addEventListener("scroll", toggleVisible);
    toggleVisible();

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollButton">
      <FaChevronUp onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }} />
    </div>
  );
};

export default ScrollButton;
