import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           My name is <span className="purple">Sabine Aliev</span>{" "}
            from <span className="purple">Redmond, Washington</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">UI/UX Programmer</span> at{" "}
            <span className="purple">Chirility</span>, a school game team.
            <br />I recieve my B.S. in{" "}
            <span className="purple">Computer Science and Game Design</span> from{" "}
            <span className="purple">Digipen Institute of Technology</span> in the Spring of 2026.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Sewing 🪡
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
