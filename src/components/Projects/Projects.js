import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
           
           {/*HyperFist */}
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HyperFist"
              description= "A comic-styled, first-person melee action game focused on punching and hand-to-hand combat. Utilizing the Unreal Game Engine, I serve as UI/UX engineer and designer, mainly worked with the Unreal widget systems"
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">

          {/**Midnight Delievry */}
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Midnight Delievry"
              description= "Cozy game where one collected ingredients to craft and deliver potions to villagers. Utilizing the Unreal Game Engine, I served as game play Ui programmer, mainly worked with the Unreal widget systems"
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">

          {/**UI Casino */}
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Casino Menu UI"
              description="A personal project, I am making a dynamic UI menu system based on a casino"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
          {/**Toxie Plant */}
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Toxie Plant"
              description="A tower defense game programmed in a custom C++ game engine. I led as technical lead, responsible for game play and graphics programming"
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">

          {/**Train Wreck */}
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Train Wreck"
              description="A 1-2 player rhythm game developed utilizing the DigiPen Graphics Library in C. I was the UI and Graphics programmer"
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description=""
             // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
