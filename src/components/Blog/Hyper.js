import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../Particle";

// import Mash from "../../Assets/Projects/Images/MidnightMash.jpg";
// import Mix from "../../Assets/Projects/Images/MidnightStir.jpg";
// import Weigh from "../../Assets/Projects/Images/MidnightWeigh.jpg";
// import Tit from "../../Assets/Projects/Images/MidnightTitle.jpg";
// import bug from "../../Assets/Projects/Images/UnrealBug.png";

function Midnight() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        {/* Header */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="purple"style={{ marginTop: 0, paddingTop: 0, paddingBottom: "80px"}}> HYPERFIST</h1>
          </Col>
        </Row>
        <h3 className="purple">This Section is WIP</h3>
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
        <Row className="align-items-center mb-5">
          <Col md={6} className="order-md-2" >
            <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "20px"}}>My Role</h3>
            <blockquote className="mb-0 fs-4">
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
  <Col md={12}>
    <blockquote className="mb-0 fs-4" style={{ marginTop: 0, paddingTop: 0 }}>
      <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>
        Controller Support
      </h3>

      <p className="mb-4">
      </p>

      <p className="mb-4">
        When I first started this project, I assumed it would take a bit, but I never could have imaged the amount of work it would take.
        I quickly figured out that Unreal was not built for World Space UI to work with controller. After multiple hours of 
        trouble shooting and debuging, I decided to try one last thing, then I would switch to manaully moving the cursor. 
      </p>
                    <p className="mb-4">
        I decided that I would line up cubes to the UI and when the game picked up the fact it was in controller mode, it would automaticly travere between the points.
        I was then left with another issue, the fact the widget would only be hovered for a split second until the mouse disappeared and it was unhovered again. 
        What I did was in the Event Tick, I would have it move the mouse to the position of the widget after a 0.01 delay. With that it somehow worked beautifully. Im still
        working on this feature and not everything works 100% of the time. But after I am done with this, I might make an actual tool for this so implementing World Space UI
        would be easier.
        
       </p>

      {/* <p className="mb-4">
        <Image
          src={Weigh}
          fluid
          rounded
          alt="Weighing minigame"
          className="float-end ms-3 mb-2"
          style={{ width: "40%" }}
        />
        How the system worked by the end was pretty interesting. From a top-down view, the player would interact with a gameplay object “alchemy table”, which would have the code for all the player inputs needed to play the minigames. Then when the widget would appear on the player screen, it would have a side bar that shows what ingredient the player has collected from the world. It would grab that data from the Resource Manager. Afterwards, it would be dragged to the widget, “cauldron”, where it would check how many and which ingredients are needed. This would be done by checking against the “quest manager” and see if the ingredient is needed. If so, the object would be saved by the widget, and if all ingredients are placed, the game can finally start. The inputs are being handled by the alchemy table.
      </p>

      <p className="mb-4">

        With this system, I made three total minigames: mashing, mixing, and weighing. Mashing is just mashing a button until the progress bar is full, however the bar is constantly going down, simulating mashing the ingredients together in a mortar and pestle. Mixing is pressing the up, down, left, and right button to ‘mix’ the pot up. Weighing is pressing the button when the green orb is over a certain area.
      </p>

      <p className="mb-4">
        <Image
          src={bug}
          fluid
          rounded
          alt="Unreal bug issue"
          className="float-end ms-3 mb-2"
          style={{ width: "40%" }}
        />
        I ran into many issues using widgets, one of my most frustrating moments was when Unreal was not reading data from an array that had its data set from the designer. In the debugger side view, it was showing the data, but when I set break points, it was telling me I had no data in the array. I was never able to fix the bug, so I decided to pivot by adding the data to a gameplay object and having the widget read the data.
      </p> */}
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
      </Container>
    </Container>
  );
}

export default Midnight;
