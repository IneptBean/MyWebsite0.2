import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import GameTable from "../../Projects/GameTable";
import Slideshow from "../../Slideshow";
import ControlPanel from "../../ControlPanel";
//Image in the {}
 import Inspo from "../../../Assets/Projects/Images/DES 395 Project_Inspo.png";
 import Mood from "../../../Assets/Projects/Images/DES 395 Project_MoodBoard.png";
// import Weigh from "../../Assets/Projects/Images/MidnightWeigh.jpg";
// import Tit from "../../Assets/Projects/Images/MidnightTitle.jpg";
// import bug from "../../Assets/Projects/Images/UnrealBug.png";

function InitPrep() {
  const navigate = useNavigate();
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        {/* Header */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="purple"style={{ marginTop: 0, paddingTop: 0, paddingBottom: "80px"}}> Inital Set Up</h1>

    <blockquote className="mb-0 fs-4" style={{ marginTop: 0, paddingTop: 0 }}>
      <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>
       
      </h3>

      <p className="mb-4">
      </p>

      <p className="mb-4">
        When I first started this project, I had to make an important choice: what 'game' would this UI be for? I decided to make a table with the three main sub 
        questions: Game Genre, Game Theme, Art Style. Afterwards I went around to my friends to help me choice a one from each colum. In the end I decided on the following:
        
      </p>
                    <p className="mb-4">

       </p>


    </blockquote>

  </Col>
</Row>
        <Row className="mb-5">
          <Col md={12} className="text-center">
          <GameTable/>    
  </Col>
</Row>

        <Row className="mb-5">
          <Col md={12} className="text-center">
            

    <blockquote className="mb-0 fs-4" style={{ marginTop: 0, paddingTop: 0 }}>


      <div className="mb-4" style={{ overflow: "hidden" }}>
        <div style={{ float: "right", maxWidth: "900px", width: "90%", marginLeft: "20px", marginBottom: "10px" }}>
          <Slideshow images={[
            { src: Inspo, alt: "Inspiration board" },
            { src: Mood, alt: "Mood board" },
            
          ]} interval={10000}/>
        </div>
        <p>
          Afterwards, I started up a Figma board to hold down all my ideas, and started researching. I used the Game UI Database to help me with my research. I was inspired heavily by
          the Persona series, specifically Persona 5 and Persona 3R. I also made a mood board, I filled it with images about what I want the art style to be and props that I might add
          to the UI. This is around the time I decided I wanted the setting to be in a alteritive universe of the Soviet Union 'highschool', the Soviet system didnt have a highschool. 
          This would also give my project a more personal note as my parents were born in the Soviet Union, modern day Azerbaijan. 
        </p>
      </div>
                    <p className="mb-4">

       </p>


    </blockquote>

  </Col>
</Row>
        <Row className="mb-5">
          <Col md={12} className="text-center">
            

    <blockquote className="mb-0 fs-4" style={{ marginTop: 0, paddingTop: 0 }}>
      <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>
       
      </h3>

      <p className="mb-4">
      </p>

      <p className="mb-4">
        It was around this time I made my first concept of the main character, and her story. In super powered world where almost everyone has a superpower, a teenage girl from the Soivet Union who has the power of Re-Winding to a prior save point after she dies.
        She is trying to solve the mystery of the recent string of murders in her school. 
        
      </p>
                    


    </blockquote>

  </Col>
</Row>

        <Row className="mb-5">
          <Col md={12} className="text-center">
            <ControlPanel
              text="Navigate"
              buttons={[
                { label: "Back", onClick: () => navigate("/project/super-3d-menu") },
                { label: "Figma Design", onClick: () => navigate("/project/super-3d-menu/figma-design") },
                // { label: "Unreal", onClick: () => navigate("/project/super-3d-menu/unreal-implementation") },
              ]}
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default InitPrep;
