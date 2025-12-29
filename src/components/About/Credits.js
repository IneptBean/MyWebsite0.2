import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import CreditText from "../../Assets/Credits.txt"

function Credits() {
return (
  
    <div className="contact-section">
      <p style={{ textAlign: "center" }}>
       {" "}
        <a
          href= {CreditText}
          target="_blank"
          rel="noreferrer"
          className="purple"
        >
          Credits
        </a>
      </p>
    </div>
  
);

}

export default Credits;