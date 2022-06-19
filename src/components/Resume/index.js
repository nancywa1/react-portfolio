import React from "react";
import resume from "../../assets/Resume.pdf";
function Resume(props) {
  return (
    <section className="my-5">
      <h1> Resume</h1>
      <a href={resume} download>
        Download my resume
      </a>
      <div className="my-2">
        <h2>Front-End Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>responseive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>API</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL Sequdelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
