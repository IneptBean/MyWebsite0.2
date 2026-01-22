import React, { useState } from "react";


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
      <p style={{ textAlign: "center" }}>
        Or email me at{" "}
        <span
          onClick={copyEmail}
          className="purple"
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          {copied ? "Copied!" : email}
        </span>
      </p>
    </div>
  );
}

export default Toolstack;
