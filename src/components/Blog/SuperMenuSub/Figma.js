import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import ControlPanel from "../../ControlPanel";
//Image in the {}
 import lay from "../../../Assets/Projects/Images/DES 395 Project_Layout.png";
 import time from "../../../Assets/Projects/Images/DES 395 Project_Timeline.png";
  import one from "../../../Assets/Projects/Images/DES 395 Project_Main1.png";
    import two from "../../../Assets/Projects/Images/DES 395 Project_Main2.png";
// import Weigh from "../../Assets/Projects/Images/MidnightWeigh.jpg";
// import Tit from "../../Assets/Projects/Images/MidnightTitle.jpg";
// import bug from "../../Assets/Projects/Images/UnrealBug.png";

function Figma() {
  const navigate = useNavigate();
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        {/* Header */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="purple"style={{ marginTop: 0, paddingTop: 0, paddingBottom: "80px"}}> Design</h1>

    <blockquote className="mb-0 fs-4" style={{ marginTop: 0, paddingTop: 0 }}>
      <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>
       
      </h3>

      <p className="mb-4">
      </p>

      <p className="mb-4">
        When I first started making the design, I had to note what types of widgets I needed. I needed the Begin Screen, the Main Screen, a Save Slot Screen, a Credits Screen, a Setting Screen, and an Exit/CODA.
        As this main menu traverse a 3D world space, I decided to make a top down blueprint of the level. I also made a 'timeline' of how to screens connect with one-another and the general location the screen is in 
        the world space.  
        
      </p>
                    <p className="mb-4">

       </p>


    </blockquote>

  </Col>
</Row>

        <Row className="mb-5 align-items-center">
          <Col md={6} className="text-center">
            <img src={lay} alt="Layout blueprint" style={{ width: "100%", borderRadius: "8px" }} />
          </Col>
          <Col md={6} className="text-center">
            <img src={time} alt="Timeline" style={{ width: "100%", borderRadius: "8px" }} />
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
        Afterwards, I made a first pass of my UI mock up in figma, it was not super polished but had some extra details needed.
        
      </p>
                    


    </blockquote>

  </Col>
</Row>
<Row className="mb-5">
          <Col md={12} className="text-center">
            <img src={one} alt="Layout blueprint" style={{ width: "100%", borderRadius: "8px" }} />
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
        I did some Heurtics testing on my UI, and I got some pretty valuable feedback. With the feedback, I made a new version of my UI and started working in the engine. 
        
      </p>
                    


    </blockquote>

  </Col>
</Row>
<Row className="mb-5">
          <Col md={12} className="text-center">
            <img src={two} alt="Layout blueprint" style={{ width: "100%", borderRadius: "8px" }} />
          </Col>
          </Row>
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <ControlPanel
              text="Navigate"
              buttons={[
                { label: "Back", onClick: () => navigate("/project/super-3d-menu") },
                { label: "Inital Prep", onClick: () => navigate("/project/super-3d-menu/init-prep") },
                // { label: "Unreal", onClick: () => navigate("/project/super-3d-menu/unreal-implementation") },
              ]}
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Figma;
