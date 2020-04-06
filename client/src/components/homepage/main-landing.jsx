import React from "react";
import SectionCta from "./cta-header/cta-header";
import SectionMidContent from "./landing-content/landing-content";
import SectionTestimonial from "./testimonial/testimonial";
import "./main-landing.scss";

const MainLanding = () => {
  return (
    <div className="main">
      <SectionCta />
      <SectionMidContent />
      <SectionTestimonial />
    </div>
  );
};

export default MainLanding;
