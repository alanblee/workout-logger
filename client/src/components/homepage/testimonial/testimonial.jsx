import React from "react";
import "./testimonial.scss";

const SectionTestimonial = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial">
          <div className="testimonial-text-box">
            <p>Great way to track progress and motivate to workout everyday!</p>
            <i className="icon ion-quote"></i>
          </div>
          <div className="testimonial-customer">
            <img src="../../../img/svg/user.svg" alt="user avatar" />
            <h1>Max Powers</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial;
