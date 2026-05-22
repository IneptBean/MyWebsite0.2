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
            type: "star",
            polygon: {
              sides: 8,
            },
          },
          color: {
            value: [
              "rgb(128, 255, 210)",
              "rgb(255, 255, 255)",
              "rgb(255, 162, 230)",
            ],
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
       


        
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
