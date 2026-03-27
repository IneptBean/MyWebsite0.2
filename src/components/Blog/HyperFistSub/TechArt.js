import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import ControlPanel from "../../ControlPanel";
import HyperPauseMaterial from "../../../Assets/Projects/Images/HyperArtGallery/Hyper_PauseMaterial.gif";
import HyperEnemy from "../../../Assets/Projects/Images/HyperArtGallery/Hyper_Enemy.gif";
import HyperButtonHover from "../../../Assets/Projects/Images/HyperArtGallery/Hyper_ButtonHover.gif";
import HyperKirbyDots from "../../../Assets/Projects/Images/HyperArtGallery/Hyper_KirbyDots.gif";

const gallery = [
  { src: HyperPauseMaterial, label: "Pause Material" },
  { src: HyperEnemy, label: "Enemy" },
  { src: HyperButtonHover, label: "Button Hover" },
  { src: HyperKirbyDots, label: "Kirby Dots" },
];

function TechArt() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? gallery.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === gallery.length - 1 ? 0 : c + 1));

  return (
    
    <Container fluid className="project-section">
      <Particle />

      <Container style={{ paddingTop: "120px", color: "white" }}>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h1 className="purple" style={{ marginTop: 0, paddingTop: 0, paddingBottom: "40px" }}>
              UI Material and UI Animation
            </h1>
          </Col>
        </Row>

        {/* Main slideshow image */}
        <div style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
          background: "#0d0d0d",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          <img
            src={gallery[current].src}
            alt={gallery[current].label}
            style={{
              width: "100%",
              display: "block",
              aspectRatio: "16 / 9",
              objectFit: "contain",
              background: "#0d0d0d",
            }}
          />

          {/* Left arrow */}
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "white",
              fontSize: "2rem",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(80,60,200,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
          >
            &#8249;
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "white",
              fontSize: "2rem",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(80,60,200,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
          >
            &#8250;
          </button>
        </div>

        {/* Title under main image */}
        <p style={{
          textAlign: "center",
          marginTop: "14px",
          fontSize: "1.15rem",
          color: "#ccc",
          letterSpacing: "0.5px",
        }}>
          {gallery[current].label}
        </p>

        {/* Thumbnail strip */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
          paddingBottom: "40px",
          flexWrap: "wrap",
        }}>
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: "140px",
                height: "80px",
                borderRadius: "6px",
                overflow: "hidden",
                cursor: "pointer",
                border: idx === current
                  ? "2px solid #7c4dff"
                  : "2px solid transparent",
                opacity: idx === current ? 1 : 0.5,
                transition: "opacity 0.2s, border-color 0.2s",
                background: "#0d0d0d",
              }}
              onMouseEnter={(e) => { if (idx !== current) e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={(e) => { if (idx !== current) e.currentTarget.style.opacity = "0.5"; }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        <Row className="mt-5">
          <Col md={12} className="text-center">
            <ControlPanel
              text="Navigate"
              buttons={[
                { label: "Back", onClick: () => navigate("/project/hyperfist") },
                { label: "Controller Support", onClick: () => navigate("/project/hyperfist/controller-support") },
                
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TechArt;
