import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import SubMenu from "../Projects/SubMenuSelect";
//Image in the {}
 import Mash from "../../Assets/Projects/Images/MidnightMash.jpg";
// import Mix from "../../Assets/Projects/Images/MidnightStir.jpg";
// import Weigh from "../../Assets/Projects/Images/MidnightWeigh.jpg";
// import Tit from "../../Assets/Projects/Images/MidnightTitle.jpg";
// import bug from "../../Assets/Projects/Images/UnrealBug.png";

function SuperMenu() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        {/* Header */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="purple"style={{ marginTop: 0, paddingTop: 0, paddingBottom: "80px"}}> 3D Menu Project</h1>
          </Col>
        </Row>

        {/* Overview section */}
        <Row className="justify-content-center text-center ">

          <Col md={6}>
            <h3 className="purple">Project Overview</h3>
            <blockquote className="mb-80 fs-4">
              A fast-paced, comic-styled, first person melee action game focused on punching, grabbing, 
              and other hand-to-hand combat game
              developed at DigiPen. This was my fifth major team project and I was the UI/UX Programmer, UI Designer, and Input Engineer
              


            </blockquote>
          </Col>

        </Row>

        {/* Role section (image on LEFT) */}
        <Row className="justify-content-center text-center">
          <Col md={6}  >
            <h3 className="purple" >What I did </h3>
            <blockquote className="mb-80 fs-4">
              I served as the UI programmer and designer in my first semester. In my second, my main focus was implementing the 
              controller support for the World Space Menu UI. 
            </blockquote>
          </Col>
          {/* <Col md={6} className="order-md-1">
            <Image
              src={Mix}
              fluid
              rounded
              alt="Potion crafting UI"
            />
          </Col> */}
        </Row>



<Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={4} className="project-card">
           
           {/*HyperFist */}
            <SubMenu
              imgPath={Mash}
              title="Initial Set Up"
              slug="super-3d-menu/init-prep"
            />
          </Col>
          <Col md={4} className="project-card">
            <SubMenu
              imgPath={Mash}
              title="Figma Design"
              slug="super-3d-menu/figma-design"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <SubMenu
              imgPath={Mash}
              title="Unreal Impletation"
              slug="super-3d-menu/unreal-implementation"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col> */}
</Row>

      </Container>
    </Container>
  );
}

export default SuperMenu;
