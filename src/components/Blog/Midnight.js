import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../Particle";

<<<<<<< HEAD
import Mash from "../../Assets/Projects/Images/MidnightMash.jpg";
import Mix from "../../Assets/Projects/Images/MidnightStir.jpg";
import Weigh from "../../Assets/Projects/Images/MidnightWeigh.jpg";
import Tit from "../../Assets/Projects/Images/MidnightTitle.jpg";
import Bug from "../../Assets/Projects/Images/UnrealBug.png";
=======
import MidnightImg1 from "../../Assets/about.png";
import MidnightImg2 from "../../Assets/about.png";
>>>>>>> parent of 847350c (midnight blog)

function Midnight() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        {/* Header */}
<<<<<<< HEAD
        <Row className="mb-5 text-center">
          <Col>
            <h1 className="purple" style={{ paddingBottom: "80px" }}>
              Midnight Delivery
            </h1>
=======
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1 className="purple">Midnight Delivery</h1>
>>>>>>> parent of 847350c (midnight blog)
          </Col>
        </Row>

        {/* Overview */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3 className="purple">Project Overview</h3>
            <p className="fs-4">
              Midnight Delivery is a cozy potion crafting and delivery game
              developed at DigiPen. This was my fourth major team project and my
<<<<<<< HEAD
              first interdisciplinary collaboration with artists and musicians.
            </p>
          </Col>
          <Col md={6}>
            <Image src={Tit} fluid rounded />
=======
              first interdisciplinary collaboration.
            </blockquote>
          </Col>
          <Col md={6}>
            <Image
              src={MidnightImg1}
              fluid
              rounded
              alt="Midnight Delivery gameplay"
            />
>>>>>>> parent of 847350c (midnight blog)
          </Col>
        </Row>

        {/* Role */}
        <Row className="align-items-center mb-5">
<<<<<<< HEAD
          <Col md={6} order={{ md: 2 }}>
            <h3 className="purple mb-3">My Role</h3>
            <p className="fs-4">
              I served as a Gameplay Programmer, implementing the minigame system
              using Unreal’s widget framework to support multiple potion crafting
              mechanics.
            </p>
          </Col>
          <Col md={6} order={{ md: 1 }}>
            <Image src={Mix} fluid rounded />
          </Col>
        </Row>

        {/* Process */}
        <Row className="mb-5">
          <Col>
            <h3 className="purple mb-4">My Process</h3>

            <p className="fs-4 mb-4">
              This was my fourth game team and major project at DigiPen. I worked
              with programmers, designers, artists, and a sound designer using
              Unreal Engine and Perforce.
            </p>

            {/* Mashing */}
            <Row className="align-items-start mb-4">
              <Col md={5}>
                <Image src={Mash} fluid rounded />
              </Col>
              <Col md={7}>
                <p className="fs-4">
                  I was tasked with making a 2D minigame using Unreal Widgets.
                  While not ideal for gameplay systems, I committed and pushed
                  through once the scope was locked.
                </p>
              </Col>
            </Row>

            {/* Weighing */}
            <Row className="align-items-start mb-4">
              <Col md={5} order={{ md: 2 }}>
                <Image src={Weigh} fluid rounded />
              </Col>
              <Col md={7} order={{ md: 1 }}>
                <p className="fs-4">
                  The system pulled data from managers and gameplay objects to
                  validate ingredients and quests before starting each
                  minigame.
                </p>
              </Col>
            </Row>

            <p className="fs-4 mb-4">
              I created three minigames: mashing, mixing, and weighing—each with
              different input mechanics and feedback systems.
            </p>

            {/* Bug */}
            <Row className="align-items-start mb-4">
              <Col md={5}>
                <Image src={Bug} fluid rounded />
              </Col>
              <Col md={7}>
                <p className="fs-4">
                  One major issue involved Unreal widgets failing to read array
                  data set by designers. I ultimately pivoted by moving the data
                  into gameplay objects.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Takeaways */}
        <Row className="mb-5">
          <Col>
            <h3 className="purple mb-3">Takeaways</h3>
            <p className="fs-4">
              Unreal is powerful, but widgets were not ideal for core gameplay.
              I also learned a lot about leadership, scope control, and that I
              really enjoy UI programming.
            </p>
=======
          <Col md={6} className="order-md-2">
            <h3 className="purple">My Role</h3>
            <blockquote className="mb-0 fs-4">
              I served as a Gameplay Programmer, implementing the minigame
              system using Unreal’s widget framework to support multiple potion
              crafting mechanics.
            </blockquote>
          </Col>
          <Col md={6} className="order-md-1">
            <Image
              src={MidnightImg2}
              fluid
              rounded
              alt="Potion crafting UI"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <blockquote className="mb-0 fs-4">
              <h3 className="purple">My Process</h3>
This was my fourth game team and major project at DigiPen. This game is a cozy potion crafting and delivery game. This was my first project with art and sound students. I worked on this with six other programmers, four designers, five artists, and one sound designer. We are using the UnReal Engine and Perforce as our SVN. 

When we first started this project, we had very little knowledge about Unreal, and I was tasked with making a 2D minigame section. Instead of using a plugin or any 2D systems that were built into Unreal, I decided to use the Unreal Widget system to make my gameplay mechanic. By the time I realized it was not a good idea, it was too late for me to restart from scratch, and I had to unfortunately push on. 

How the system worked by the end was pretty interesting. From a top-down view, the player would interact with a gameplay object “alchemy table”, which would have the code for all the player inputs needed to play the minigames. Then when the widget would appear on the player screen, it would have 

I ran into many issues using widgets, one of my most frustrating moments was when Unreal was not reading data from an array that had it’s data set from the designer. In the debugger side view, it was showing the data, but when I set break points, it was telling me I had no data in the array. I was never able to fix the bug, since to me, it seemed like an Unreal side issue, so I decided to pivot by adding the data to a gameplay object and having the widget read the data. 

            </blockquote>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <blockquote className="mb-0 fs-4">
              <h3 className="purple">Takeaways</h3>
              The Unreal Engine is an amazing 3D game engine but I should have not used widgets for a core gameplay mechanic.
              I was able to make it work, but it caused way more stress than necessary.
              Also, that inter-team drama happens and how to navigate letting them go from the team.
            </blockquote>
>>>>>>> parent of 847350c (midnight blog)
          </Col>
        </Row>

        {/* Learnings */}
        <Row>
<<<<<<< HEAD
          <Col>
            <h3 className="purple mb-3">What I Learned</h3>
            <ul className="fs-4">
              <li>Using Unreal Engine and widget systems</li>
              <li>Working with large interdisciplinary teams</li>
              <li>Managing scope, stress, and team conflict</li>
            </ul>
=======
          <Col md={12}>
            <h3 className="purple">What I Learned</h3>
            <blockquote className="mb-0 fs-4">
              <ul>
                <li>Using Unreal Engine and widget systems</li>
                <li>Working with large interdisciplinary teams</li>
                <li>Managing scope, stress, and team conflict</li>
              </ul>
            </blockquote>
>>>>>>> parent of 847350c (midnight blog)
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Midnight;
