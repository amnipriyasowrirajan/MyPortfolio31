import React from "react";
import { Element } from "react-scroll";
import skillimage from "../../assets/images/skills.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./SkillContainer.scss";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer_image">
        <img src={skillimage} alt="" />
      </div>
      <div className="skillcontainer_text">
        <h2>SKILLSET</h2>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCoffee} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </Element>
  );
};

export default SkillContainer;
