import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500,
            },
          },
          shape: {
            type: "square",
          },
          color: {
            value: [
              "hsla(160, 39%, 38%, 1.00)",    // black
              "hsla(64, 100%, 50%, 1.00)",  // white
            ],
            animation: {
              enable: true,
              speed: 6,
              sync: false,
            },
          },
          opacity: {
            value: 0.6,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            direction: "right",
            speed: 0.05,
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
