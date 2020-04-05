import React from "react";
import { Link } from "react-router-dom";
import "./cta-header.scss";

const SectionCta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="main-message">
          <h3>Track progression</h3>
          <h1>Stay Fit</h1>
          <p>
            8-bit butcher pop-up, hashtag health goth fam kombucha slow-carb
            shabby chic twee vegan sartorial YOLO pug. Franzen knausgaard
            waistcoat hexagon sartorial tacos cliche actually chia truffaut.
          </p>
        </div>
        <div className="cta-btn">
          <button className="btn">
            <Link to="/sign-up">Try now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionCta;
