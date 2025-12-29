import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import C from "../../Assets/TechIcons/C++.svg";

import Git from "../../Assets/TechIcons/Git.svg";

import AWS from "../../Assets/TechIcons/AWS.svg";


function Techstack() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C#" />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="P4V" />
        <div className="tech-icons-text">Perforce</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Unity" className="tech-icon-images" />
        <div className="tech-icons-text">Unity</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Unreal Engine" className="tech-icon-images" />
        <div className="tech-icons-text">Unreal Engine</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="OpenGl" className="tech-icon-images" />
        <div className="tech-icons-text">OpenGl</div>
      </Col>



    </Row>
  );
}

export default Techstack;
