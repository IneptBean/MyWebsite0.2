import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
function Toxie() {
  return (
            <Container fluid className="project-section">
      <Particle />
      <h1 className="purple">ToxiePlant</h1>
      <p>
        Cozy game where players craft and deliver potions to villagers.
      </p>
    </Container>
  );
}

export default Toxie;
