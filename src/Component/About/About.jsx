import "./About.css";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="2.jpg"></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              <pre>
                Hi, I am Ritika Trivedi, a dedicated frontend developer with a
                <br />
                passion for creating beautiful and responsive web interfaces.
                <br></br>
                Proficient in HTML, CSS, JavaScript, and React, I love bringing
                <br></br>
                designs to life and ensuring a seamless user experience. As a
                <br></br>
                fresher, I am eager to apply my skills and grow in the dynamic
                <br></br>
                field of web development.
              </pre>
            </p>
          </div>

          <div id="skill" className="about-skills">
            <div className="about-skill">
              <p>HTML& CSS</p>
              <hr style={{ width: "30%" }}></hr>
              <p>JavaScript</p>
              <hr style={{ width: "30%" }}></hr>
              <p>React Js</p>
              <hr style={{ width: "30%" }}></hr>
              <p>SQL</p>
              <hr style={{ width: "30%" }}></hr>
              <p>Java</p>
              <hr style={{ width: "30%" }}></hr>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
