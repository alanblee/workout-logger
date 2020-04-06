import React from "react";
import SectionCta from "./cta-header/cta-header";
import SectionMidContent from "./landing-content/landing-content";
import SectionTestimonial from "./testimonial/testimonial";
import SectionEnd from "./end-content/end-content";
import "./main-landing.scss";

const MainLanding = () => {
  return (
    <div className="main">
      <SectionCta />
      <SectionMidContent />
      <SectionTestimonial />
      <SectionEnd />
    </div>
  );
};

export default MainLanding;
