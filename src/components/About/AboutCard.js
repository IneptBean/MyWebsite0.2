import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           My name is <span className="purple">Sabine Aliev</span>{" "}
            from <span className="purple">Redmond, Washington</span>.
            <br /> I am born and raised in 
            <span className="purple"> Chicago, IL</span>, but I am ethicinally Azerbaijani. 
            I know how to speak <span className="purple"> Russian </span>conversionally. 
                        <br />
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
              <AiFillStar /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <AiFillStar /> Drawing ✍️
            </li>
            <li className="about-activity">
              <AiFillStar /> Sewing 🪡
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
