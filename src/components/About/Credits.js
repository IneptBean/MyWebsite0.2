import React from "react";


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