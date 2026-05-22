import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function UIEngineering() {
  return (
    <Container style={{ color: "black" }}>
      <div className="backPort-box">
      <Row>
        <Col><h2 style={{ fontSize: "2em", margin: 0 }}>Demo Reel</h2></Col>

      </Row>
      <br></br>
        <Row>
        <Col>reel goes here</Col>
        
      </Row>
      <br></br>
      <Row>
      <div className="ui-section">

  <div className="ui-left">
    <h2>Things I made using UI</h2>

    <ul>
      <li>Modular Widgets</li>
      <li>Custom Progress Bars</li>
      <li>Interactive Minigames</li>
      <li>Inventory Systems in Widgets</li>
      <li>3D Menu Controller Support</li>
      <li>Tutorial Systems</li>
      <li>Tech Art</li>
      <li>And More!</li>
    </ul>
  </div>

  <div className="ui-right">
    <p>
      I have programmed UI in <br />
      Unreal Engine UMG and Common UI, <br />
      Unity, and Custom Engines
    </p>
  </div>
  
</div>
</Row>
<br>
</br>
<Row>
  <Col><h2 style={{ fontSize: "1.5em", margin: 0 }}>3D UI Programming</h2></Col>
</Row>
<br>
</br>
<Row>
  <Col><h2 style={{ fontSize: "1em", margin: 0 }}>In my last year of University, I got to make a 3D World Space Menu UI and had to make it work for controller support.</h2></Col>
</Row>
<Row>
  <Col><h2 style={{ fontSize: "1.5em", margin: 0 }}>Examples of My Work:</h2></Col>
</Row>
      </div>
    </Container>
  );
}

export default UIEngineering;