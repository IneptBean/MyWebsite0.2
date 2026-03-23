import React, { useState, useEffect, useCallback } from "react";

function Slideshow({ images, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 400);
  }, []);

  const prev = () => goTo(current === 0 ? images.length - 1 : current - 1);
  const next = useCallback(() => goTo(current === images.length - 1 ? 0 : current + 1), [current, images.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: "relative", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
      <div style={{ width: "100%", paddingTop: "75%", position: "relative", overflow: "hidden", borderRadius: "8px" }}>
        <img
          src={images[current].src}
          alt={images[current].alt || `Slide ${current + 1}`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: fade ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
          }}
        />
      </div>
      {images[current].caption && (
        <p style={{ marginTop: "8px", fontStyle: "italic", color: "#ccc", opacity: fade ? 1 : 0, transition: "opacity 0.4s ease-in-out" }}>
          {images[current].caption}
        </p>
      )}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          lineHeight: "36px",
        }}
      >
        &#8249;
      </button>
      <button
        onClick={() => next()}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          lineHeight: "36px",
        }}
      >
        &#8250;
      </button>
      <div style={{ marginTop: "10px" }}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => goTo(i)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: i === current ? "white" : "rgba(255,255,255,0.4)",
              margin: "0 5px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
