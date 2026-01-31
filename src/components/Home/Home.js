import React from "react";
import { Container} from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";



function Home() {
  return (
    <section className="home-section" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Particle />

      {/* Name and Type */}
      <Container className="text-center home-header">
  <h1 className="heading-name" style={{ color: "white" }}>
          Sabine <strong className="main-name">'Bean' </strong> Aliev
        </h1>
        <Type />
      </Container>

      {/* Home2 Section */}
      <Container className="d-flex justify-content-center" style={{ flex: 1, alignItems: "center" }}>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
