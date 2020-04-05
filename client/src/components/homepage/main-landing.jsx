import React from "react";
import SectionCta from "./cta-header/cta-header";
import SectionMidContent from "./landing-content/landing-content";
import "./main-landing.scss";

const MainLanding = () => {
  return (
    <div className="main">
      <SectionCta />
      <SectionMidContent />
    </div>
  );
};

export default MainLanding;
