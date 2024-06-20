import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="pic.jpg" alt=""></img>
      <h1>
        <span> I'm Ritika Trivedi</span>, Front-End Developer.
      </h1>
      <p>
        I am a passionate software developer with expertise in Java, Python,
        HTML, CSS, JavaScript, React, and SQL. As a recent graduate, I bring
        fresh perspectives and a strong foundation in frontend development. I
        enjoy creating responsive, user-friendly web applications and
        continuously seek to expand my skill set. Ready to contribute innovative
        solutions and grow in a dynamic development environment.
      </p>
      <div className="heo-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
      </div>
      <div className="hero-resume">
        <a href="ritika.pdf" download=" Resume" target="_blank">
          <button type="button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};
