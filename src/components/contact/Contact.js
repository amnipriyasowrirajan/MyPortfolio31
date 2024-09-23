import React from "react";
import { Element } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email: <span>amnipriya31@gmail.com</span>
        </p>
        <p>
          Github Username: <span>@amnipriyasowrirajan</span>
        </p>
        <div className="contact_icons">
          <a href="https://www.linkedin.com/in/amnipriya31/">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://github.com/amnipriyasowrirajan">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
