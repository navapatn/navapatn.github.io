import React from "react";
import "./Container.css";
import Landing from "../Landing/Landing";
import About from "../About/About";
import News from "../News/News";
import Talks from "../Talks/Talks";
import Publications from "../Publications/Publications";
import Services from "../Services/Services";
import Education from "../Education/Education";

const Container = () => {
  return (
    <div className="container">
      <Landing />
      <About />
      <News />
      <Publications />
      <Talks />
      <Services />
      <Education />
    </div>
  );
};

export default Container;
