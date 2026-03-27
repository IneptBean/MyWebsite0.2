import React, { useState, useEffect, useRef } from "react";
import { CharacterReveal } from "react-text-reveal";

function Type() {
  const [canPlay, setCanPlay] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCanPlay(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ fontSize: "2.2em", color: "white", fontWeight: 600, textAlign: "center" }}>
      <CharacterReveal
        canPlay={canPlay}
        copy={["UI/UX Programmer | UI Designer | Graphics Programmer | Gameplay Programmer"]}
        animateOpacity
        offset="50px"
        duration={800}
        characterOffsetDelay={95}
            ease={"cubic-bezier(0,0.4,0.4,1)"}
    
        from="bottom"
      />
    </div>
  );
}

export default Type;
