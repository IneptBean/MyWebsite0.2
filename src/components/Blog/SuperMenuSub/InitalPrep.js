import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import GameTable from "../../Projects/GameTable";
//Image in the {}
// import Mash from "../../Assets/Projects/Images/MidnightMash.jpg";
// import Mix from "../../Assets/Projects/Images/MidnightStir.jpg";
// import Weigh from "../../Assets/Projects/Images/MidnightWeigh.jpg";
// import Tit from "../../Assets/Projects/Images/MidnightTitle.jpg";
// import bug from "../../Assets/Projects/Images/UnrealBug.png";

function InitPrep() {
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



      </Container>
    </Container>
  );
}

export default InitPrep;
