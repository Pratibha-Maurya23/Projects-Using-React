import React from "react";
import { personalInfo, skills, education, experience } from "../data/aboutData";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about-content padd-15">
          {/* Intro */}
          <div className="row">
            <div className="about-text">
              <h3>
                I&apos;m <span>Pratibha Maurya</span>, a Web Developer
              </h3>
              <p>
                A passionate Computer Science student and web developer, skilled
                in frontend (HTML, CSS, JS, React) and backend fundamentals
                (Node.js, Express). I love building responsive apps, solving
                coding problems, and exploring Cloud, Blockchain, and AI.
              </p>
            </div>
          </div>

          {/* Personal Info + Skills */}
          <div className="row">
            {/* Personal Info */}
            <div className="personal-info padd-15">
              <div className="row">
                {personalInfo.map((item, index) => (
                  <div className="info-items padd-15" key={index}>
                    <p>{item.label} : <span>{item.value}</span></p>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="buttons padd-15">
                  <a href="#contact" className="btn hire-me">Hire Me</a>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="skill padd-15">
              <div className="row">
                {skills.map((skill, index) => (
                  <div className="skill-items padd-15" key={index}>
                    <h5>{skill.name}</h5>
                    <div className="progress">
                      <div className="progress-in" style={{ width: `${skill.level}%` }}></div>
                      <div className="skill-percent">{skill.level}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="row padd-15">
            <div className="education padd-15">
              <h3 className="title">Education</h3>
              <div className="row">
                <div className="timeline-box">
                  <div className="timeline shadow-dark">
                    {education.map((edu, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i>{edu.date}</h3>
                        <h4 className="timeline-title">{edu.title}</h4>
                        <p className="timeline-text">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="experience padd-15">
              <h3 className="title">Experience</h3>
              <div className="row">
                <div className="timeline-box">
                  <div className="timeline shadow-dark">
                    {experience.map((exp, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date"><i className="fa fa-calendar"></i>{exp.date}</h3>
                        <h4 className="timeline-title">{exp.title}</h4>
                        <p className="timeline-text">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
