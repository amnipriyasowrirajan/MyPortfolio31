import React from "react";
import { Element } from "react-scroll";
import Experience from "../experiencebox/ExperienceBox";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experiencecontainer" id="experience">
      <h1>Experience</h1>
      <div className="experiencecontainer_info">
        <Experience number="3" title="Clients" />
        <Experience number="4" title="Individual Projects" />
        <Experience
          number="7"
          title="Projects"
          style={{ backgroundColor: "#6528e0" }}
        />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
