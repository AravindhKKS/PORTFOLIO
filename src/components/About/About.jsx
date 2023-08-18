import { useState } from "react";
import "./About.css";

const About = () => {
  const [exper, setExper] = useState(true);
  const [edu, setEdu] = useState(false);

  const experClick = () => {
    setExper(true);
    setEdu(false);
  };

  const eduClick = () => {
    setEdu(true);
    setExper(false);
  };

  return (
    <div className="About">
      <div className="AboutWrapper">
        <div className="AboutRight">
          <div className="Aboutme">
            <div className="AboutTitle">ABOUT ME</div>
            <div className="AboutDesc">
              As an enthusiastic self-learner in React development, I am excited
              to embark on a journey of crafting engaging web experiences. My
              dedication to acquiring skills through personal exploration and
              projects has equipped me with a solid foundation in building
              dynamic user interfaces. I am ready to embrace opportunities that
              allow me to learn, grow, and make a meaningful impact in the world
              of web development.
            </div>
            <div className="myself">
              <div
                className={exper ? "experience active " : "experience"}
                onClick={experClick}
              >
                <div className="Text">Experience</div>
              </div>
              <div
                className={edu ? "education active " : "education"}
                onClick={eduClick}
              >
                <div className="Text">Education</div>
              </div>
            </div>
            {exper && (
              <div className="experienceContent">
                <span>
                  I'm an aspiring React developer, adept at crafting efficient
                  and reusable code. My experience with frameworks like
                  animate.css has allowed me to create engaging personal
                  projects. Currently, I'm immersed in enhancing my skills
                  through a React-focused initiative, driven by a strong
                  eagerness to contribute my evolving expertise to dynamic web
                  development teams.
                </span>
              </div>
            )}
            {edu && (
              <div className="educationContent">
                <div className="mca">
                  <div className="eduTitle">
                    Master of Computer Application (MCA),
                  </div>
                  <div className="eduDesc">
                    MASS College of Arts & Science,
                    <br /> Kumbakonam.
                    <br /> (Bharathidasan University)
                  </div>
                </div>
                <div className="bca">
                  <div className="eduTitle">
                    Bachelor of Computer Application (BCA),
                  </div>
                  <div className="eduDesc">
                    MASS College of Arts & Science,
                    <br /> Kumbakonam.
                    <br /> (Bharathidasan University)
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="skillContainer">
        <div className="skill">SKILLS</div>
        <div className="skillWrapper">
          <div className="skillContent">
            <div className="skillTitle ">FRONT-END</div>
            <div className="skillDesc">HTML</div>
            <div className="skillDesc">CSS</div>
            <div className="skillDesc">REACT.JS</div>
          </div>
          <div className="skillContent">
            <div className="skillTitle">PROGRAMMING</div>
            <div className="skillDesc">JAVASCRIPT</div>
          </div>
          <div className="skillContent">
            <div className="skillTitle">VERSIONING</div>
            <div className="skillDesc">GIT</div>
            <div className="skillDesc">GITHUB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
