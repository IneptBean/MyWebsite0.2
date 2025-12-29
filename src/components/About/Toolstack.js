import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCopy } from "react-icons/ai";

function Toolstack() {
  const [copied, setCopied] = useState(false);
  const email = "sabine.aliev@icloud.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-section">
      <p style={{ textAlign: "center" }}>
        You can contact me on my{" "}
        <a
          href="https://www.linkedin.com/in/sabine-aliev"
          target="_blank"
          rel="noreferrer"
          className="purple"
        >
          LinkedIn
        </a>
      </p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
        <span>You can contact me at{" "}</span>
        <div className="email-copy-bar" onClick={copyEmail} style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.1)",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          marginLeft: "8px"
        }}>
          <span style={{ marginRight: "10px" }}>{email}</span>
          <AiOutlineCopy />
          {copied && <span style={{ marginLeft: "10px", color: "#c770f0" }}>Copied!</span>}
        </div>
      </div>
    </div>
  );
}

export default Toolstack;
