import React from "react";
import { Link } from "react-router-dom";
import "./end-content.scss";

const SectionEnd = () => {
  return (
    <section className="begin-journey">
      <div className="container">
        <div className="title-heading">
          <h3>Start your</h3>
          <h1>Fitness journey</h1>
          <p>
            gochujang hoodie tumblr bitters messenger bag 8-bit. Blog salvia
            wayfarers freegan subway tile disrupt.
          </p>
        </div>
        <div className="journey-grid">
          <div className="journey-grid-item">
            <p>
              Post-ironic craft beer succulents four dollar toast, narwhal
              stumptown etsy austin blue bottle pickled truffaut photo booth
              tumblr. Gentrify lomo activated charcoal organic. tumblr. Gentrify
              lomo activated charcoal organic.
            </p>
          </div>
          <div className="journey-grid-item">
            <p>
              Gochujang YOLO try-hard taiyaki bushwick, aesthetic snackwave
              quinoa keytar art party plaid tacos whatever. Umami vice +1
              post-ironic tattooed trust fund. Actually jianbing roof party
              health goth. Squid YOLO fixie sustainable.
            </p>
          </div>
        </div>
        <Link to="/" className="btn">
          Start free trial
        </Link>
      </div>
    </section>
  );
};

export default SectionEnd;
