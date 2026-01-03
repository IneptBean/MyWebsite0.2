import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import Cplus from "../../Assets/TechIcons/C++.svg";
import C from "../../Assets/TechIcons/c.svg";
import Csharp from "../../Assets/TechIcons/c--4.svg";
import Git from "../../Assets/TechIcons/Git.svg";

import Pv4 from "../../Assets/TechIcons/p4v.svg";
import Unity from "../../Assets/TechIcons/unity.svg";
import Unreal from "../../Assets/TechIcons/unreal-engine.svg";
import OpenGl from "../../Assets/TechIcons/opengl.svg";

function Techstack() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const iconStyle = { width: "30px", height: "30px", objectFit: "contain" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cplus} alt="C++" style={iconStyle} />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" style={iconStyle} />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Csharp} alt="C#" style={iconStyle} />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" style={iconStyle} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Pv4} alt="P4V" style={iconStyle} />
        <div className="tech-icons-text">Perforce</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Unity} alt="Unity" style={iconStyle} />
        <div className="tech-icons-text">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Unreal} alt="Unreal Engine" style={iconStyle} />
        <div className="tech-icons-text">Unreal Engine</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={OpenGl} alt="OpenGl" style={iconStyle} />
        <div className="tech-icons-text">OpenGl</div>
      </Col>
    </Row>
  );
}

export default Techstack;
