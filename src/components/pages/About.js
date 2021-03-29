import React from "react";
import "../../App.css";

const About = () => (
  <div>
    <section id="aboutMe">
      <h2>About Me</h2>
      <p>
        My name is Dana Smooke but everyone calls me Danny (make sure to spell
        it like a boy's name!). I am 25 years old, and I graduated from Yale
        University with a double major in Theater Studies and Art History.
        <p>
          I first got a taste for web design after I took a summer course on
          Adobe InDesign and Photoshop. I loved being able to add my own style
          to professional looking layouts. When COVID-19 hit,the need for
          developers skyrocketed. It became clear that all schools would need to
          transition to some form of online teaching platform. I spent the
          summer converting my father's handwritten technical notes into PNG
          images by using LaTeX.I liked what I was doing and wanted to learn
          more.
        </p>
        <p>
          When I'm not in the theater or behind the computer, you can find me
          working outside in the yard, doing a crossword puzzle, working out,
          cooking, or drawing political cartoons.
        </p>
      </p>
      <hr />
    </section>
    {/*<!--Technical Skills-->*/}
    <section id="techSkills">
      <h2>Technical Skills</h2>
      {/*<!-- Progress bars / Skills --> */}
      <p>Visual & Performing Arts</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: 99 + "%" }}
        >
          99%
        </div>
      </div>
      <p>Web Design</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: 85 + "%" }}
        >
          85%
        </div>
      </div>

      {/*<!--Download Resume-->*/}
      <p>
        <a></a>
        <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
          <a
            href="imgs/Coding Resume_DSmooke.pdf"
            download="codingResumeDsmooke"
            rel="noreferrer"
          >
            <i className="fa fa-download w3-margin-right"></i>Download Resume
          </a>
        </button>
      </p>
      <hr />
    </section>
  </div>
);

export default About;
