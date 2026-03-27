import { Col, Row } from "react-bootstrap";

import {
  SiC, SiCplusplus, SiCsharp, SiUnity, SiUnrealengine, SiOpengl,
  SiFigma, SiSteamdeck, SiNintendoswitch, SiGit, SiPerforce
} from "react-icons/si";
import { FaPaintBrush, FaGamepad, FaCubes, FaHandPointer, FaBolt, FaUsers, FaComments, FaCogs, FaPen } from "react-icons/fa";
import { MdAnimation, MdDesignServices, MdViewInAr, MdWindow } from "react-icons/md";

function Techstack() {
  const s = { fontSize: "30px", width: "30px", height: "30px" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiC style={s} />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus style={s} />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp style={s} />
        <div className="tech-icons-text">C#</div>
      </Col>

      {/* Engines & Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity style={s} />
        <div className="tech-icons-text">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine style={s} />
        <div className="tech-icons-text">Unreal</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCogs style={s} />
        <div className="tech-icons-text">Custom Engine</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpengl style={s} />
        <div className="tech-icons-text">OpenGL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdWindow style={s} />
        <div className="tech-icons-text">IMGui</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma style={s} />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPen style={s} />
        <div className="tech-icons-text">Clip Studio Paint</div>
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit style={s} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPerforce style={s} />
        <div className="tech-icons-text">Perforce</div>
      </Col>

      {/* UI & Art */}
      <Col xs={4} md={2} className="tech-icons">
        <FaPaintBrush style={s} />
        <div className="tech-icons-text">UI Tech Art</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdAnimation style={s} />
        <div className="tech-icons-text">UI Animations</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdDesignServices style={s} />
        <div className="tech-icons-text">UI Designer</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHandPointer style={s} />
        <div className="tech-icons-text">UI/UX Programmer</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine style={s} />
        <div className="tech-icons-text">CommonUI Plugin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdViewInAr style={s} />
        <div className="tech-icons-text">3D World UI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGamepad style={s} />
        <div className="tech-icons-text">Controller Navigation</div>
      </Col>

      {/* Development */}
      <Col xs={4} md={2} className="tech-icons">
        <FaCubes style={s} />
        <div className="tech-icons-text">Game Development</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBolt style={s} />
        <div className="tech-icons-text">Rapid Prototyping</div>
      </Col>

      {/* Platform */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSteamdeck style={s} />
        <div className="tech-icons-text">Steam Deck Development</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNintendoswitch style={s} />
        <div className="tech-icons-text">Nintendo Switch Development</div>
      </Col>

      {/* Soft Skills */}
      <Col xs={4} md={2} className="tech-icons">
        <FaUsers style={s} />
        <div className="tech-icons-text">Leadership</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaComments style={s} />
        <div className="tech-icons-text">Communication</div>
      </Col>
    </Row>
  );
}

export default Techstack;
