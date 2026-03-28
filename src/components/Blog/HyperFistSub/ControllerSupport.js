import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import ControlPanel from "../../ControlPanel";
import ControllerVideo from "../../../Assets/Projects/Images/ControllerWorking.mp4";

function Midnight() {
  const navigate = useNavigate();
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        {/* Header */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="purple"style={{ marginTop: 0, paddingTop: 0, paddingBottom: "20px"}}> Controller Support</h1>
          </Col>
        </Row>

        <Row className="mb-2" style={{ justifyContent: "center" }}>
          <Col md={3} className="text-center">
            <video width="100%" controls>
              <source src={ControllerVideo} type="video/mp4" />
            </video>
          </Col>
        </Row>

<Row style={{ justifyContent: "center", padding: "10px" }}>
  <Col md={12}>
    <blockquote className="mb-0 fs-4" style={{ marginTop: 0, paddingTop: 0 }}>
      <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "0px" }}>
       
      </h3>

      <p className="mb-4">
      </p>

      <p className="mb-4">
When I first started this project, I assumed it would take a bit, but I never could have imagined the amount of work it would take. 
I quickly figured out that Unreal was not built for World Space UI to work with controllers. After multiple hours of trouble shooting and debugging, 
I decided to try one last thing, then I would switch to manually moving the cursor.

      </p>
                    <p className="mb-4">
I decided that I would line up cubes to the UI and when the game picked up the fact it was in controller mode, 
it would automatically traverse between the points. I was then left with another issue, the fact the widget would only be hovered for a split second 
until the mouse disappeared and it was unhovered again. What I did was in the Event Tick, I would have it move the mouse to the position of the widget 
after a 0.01 delay. With that it somehow worked beautifully. 
        
       </p>
      <p className="mb-4">
        I'm still working on this feature and not everything works 100% of the time. But after I am done with this, 
        I might make an actual tool for this so implementing World Space UI would be easier.
      </p>

    </blockquote>

  </Col>
</Row>


{/* 
        <Row>
          <Col md={12}>
            <blockquote className="mb-0 fs-4"  style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>
              <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>Takeaways</h3>
              The Unreal Engine is an amazing 3D game engine but I should have not used widgets for a core gameplay mechanic.
              I was able to make it work, but it caused way more stress than necessary.
              Also, the inter-team drama happens and how to navigate letting them go from the team. And in the end, I learned I liked UI programming.
            </blockquote>
          </Col>
        </Row> */}

        {/* Learnings */}
        {/* <Row>
          <Col md={12}>
            <h3 className="purple"  style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>What I Learned</h3>
            <blockquote className="mb-0 fs-4">
              <ul>
                <li>Using Unreal Engine and widget systems</li>
                <li>Working with large interdisciplinary teams</li>
                <li>Managing scope, stress, and team conflict</li>
              </ul>
            </blockquote>
          </Col>
        </Row> */}

        <Row className="mt-5">
          <Col md={12} className="text-center">
            <ControlPanel
              text="Navigate"
              buttons={[
                { label: "Back", onClick: () => navigate("/project/hyperfist") },
                { label: "Tech Art", onClick: () => navigate("/project/hyperfist/tech-art") },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Midnight;
