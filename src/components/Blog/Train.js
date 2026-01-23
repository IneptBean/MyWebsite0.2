import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
function Train() {
  return (
            <Container fluid className="project-section">
      <Particle />
      <h1 className="purple"> Train Wreck</h1>
      <p>
        Cozy game where players craft and deliver potions to villagers.
      </p>
    </Container>
  );
}

export default Train;
