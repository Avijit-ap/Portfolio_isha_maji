import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="Isha_Aboutus.jpg" alt="profilr_pib" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I have knowledge of technicall skill, including proficiency in
              programming languages such as Java,HTML,CSS JavaScript and ReactJs
              .That skills demonstrate my ability to develop and design software
              applications and responsive web pages. I have alwayspushed myself
              to learn something new to enhance my skill and gain experience.
              I have alwayspushed myself
              to learn something new to enhance my skill and gain experience.
              I have alwayspushed myself
              to learn something new to enhance my skill and gain experience.
            </p>
          </div>
        </div>
      </div>
      </Jump>
    </>
  );
};

export default About;
