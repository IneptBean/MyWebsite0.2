import React from "react";

function ControlPanel({ text, buttons }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: "12px",
      padding: "30px",
      maxWidth: "700px",
      margin: "0 auto",
      textAlign: "center",
      color: "white",
    }}>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>{text}</p>
      {buttons && buttons.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={btn.onClick}
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ControlPanel;
