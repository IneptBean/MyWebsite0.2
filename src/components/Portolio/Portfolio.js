import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import UIEngineering from "./UIEngineering";

// To add a category: import its component above, then add a row here.
// `component: null` falls back to a placeholder until you wire one up.
const PORTFOLIO_CATEGORIES = [
  { label: "UI Engineering", component: UIEngineering },
  { label: "UI Design", component: null },
  { label: "UX", component: null },
  { label: "Technical Design", component: null },
  { label: "Tech Art/Graphics", component: null },
  { label: "Gameplay Programming", component: null },
  { label: "Other", component: null },
];

function Portfolio() {
  const [selected, setSelected] = useState(PORTFOLIO_CATEGORIES[0].label);
  const active = PORTFOLIO_CATEGORIES.find((c) => c.label === selected);
  const ActiveComponent = active?.component;

  return (
    <>
      {" "}
      
      
      <Container fluid className="project-section">
        <Particle />
        <Container style={{ position: "relative", zIndex: 1 }}>

<div className="portfolio-box">
  <div className="portfolio-box-inner">
         <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
            //box of all options

              style={{
                justifyContent: "center",

              }}
            >
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                {PORTFOLIO_CATEGORIES.map(({ label }) => (
                  <button
                    key={label}
                    type="button"
                    className="portLink-box"
                    onClick={() => setSelected(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Col>

          </Row>
  </div>
</div>

          <h1 className="project-heading">
            {selected}
          </h1>

          {ActiveComponent ? <ActiveComponent /> : <p>Coming soon.</p>}


         
        </Container>
      </Container>
    </>
  );
}

export default Portfolio;
