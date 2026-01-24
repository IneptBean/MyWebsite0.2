import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../Particle";

import Mash from "../../Assets/Projects/Images/MidnightMash.jpg";
import Mix from "../../Assets/Projects/Images/MidnightStir.jpg";
import Weigh from "../../Assets/Projects/Images/MidnightWeigh.jpg";
import Tit from "../../Assets/Projects/Images/MidnightTitle.jpg";
import bug from "../../Assets/Projects/Images/UnrealBug.png";

function Midnight() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        {/* Header */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="purple"style={{ marginTop: 0, paddingTop: 0, paddingBottom: "80px"}}>Midnight Delivery</h1>
          </Col>
        </Row>

        {/* Overview section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3 className="purple">Project Overview</h3>
            <blockquote className="mb-0 fs-4">
              Midnight Delivery is a cozy potion crafting and delivery game
              developed at DigiPen. This was my fourth major team project and my
              first interdisciplinary collaboration with artists and musicians.
            </blockquote>
          </Col>
          <Col md={6}>
            <Image
              src={Tit}
              fluid
              rounded
              alt="Midnight Delivery gameplay"
            />
          </Col>
        </Row>

        {/* Role section (image on LEFT) */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="order-md-2" >
            <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "20px"}}>My Role</h3>
            <blockquote className="mb-0 fs-4">
              I served as a Gameplay Programmer, implementing the minigame
              system using Unreal’s widget framework to support multiple potion
              crafting mechanics.
            </blockquote>
          </Col>
          <Col md={6} className="order-md-1">
            <Image
              src={Mix}
              fluid
              rounded
              alt="Potion crafting UI"
            />
          </Col>
        </Row>

<Row style={{ justifyContent: "center", padding: "10px" }}>
  <Col md={12}>
    <blockquote className="mb-0 fs-4" style={{ marginTop: 0, paddingTop: 0 }}>
      <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>
        My Process
      </h3>

      <p className="mb-4">
        This was my fourth game team and major project at DigiPen. This game is a cozy potion crafting and delivery game. This was my first project with art and sound students. I worked on this with six other programmers, four designers, five artists, and one sound designer. We are using the UnReal Engine and Perforce as our SVN.
      </p>

      <p className="mb-4">
        <Image
          src={Mash}
          fluid
          rounded
          alt="Mashing minigame"
          className="float-start me-3 mb-2"
          style={{ width: "40%" }}
        />
        When we first started this project, we had very little knowledge about Unreal, and I was tasked with making a 2D minigame section. Instead of using a plugin or any 2D systems that were built into Unreal, I decided to use the Unreal Widget system to make my gameplay mechanic. By the time I realized it was not a good idea, it was too late for me to restart from scratch, and I had to unfortunately push on.
      </p>

      <p className="mb-4">
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
      </p>
      <p>For the first part of the project, I was the Co-Producer for the team, I stepped down the second half as I was bombarded with other classwork. Unfortunately, we had to let go of one of our members from the team. It was very complicated but in the end, it was the best for the team. I also learned a lot about leadership and how to manage these types of situations. I learned it was best to have everyone in on what is happening from the get go, so everyone has the full context of what is happening. I also learned that a lot of people I work with are very nice, to a fault sometimes, as they believed it was ‘mean’ to let someone go, and they believed that their skills were valuable. It took a new skill to explain that it was better for our team health if they were let go then other people suffering in silence by not firing them. </p>
    </blockquote>

  </Col>
</Row>




        <Row>
          <Col md={12}>
            <blockquote className="mb-0 fs-4"  style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>
              <h3 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "30px" }}>Takeaways</h3>
              The Unreal Engine is an amazing 3D game engine but I should have not used widgets for a core gameplay mechanic.
              I was able to make it work, but it caused way more stress than necessary.
              Also, the inter-team drama happens and how to navigate letting them go from the team. And in the end, I learned I liked UI programming.
            </blockquote>
          </Col>
        </Row>

        {/* Learnings */}
        <Row>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Midnight;
