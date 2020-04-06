import React from "react";
import "./landing-content.scss";

const SectionMidContent = () => {
  const gridItems = [
    { name: "tracking", icon: "network" },
    { name: "progress", icon: "heart" },
    { name: "reminder", icon: "calendar" },
  ];
  const renderItems = () => {
    return gridItems.map((item, indx) => {
      return (
        <div className={`feature-grid-item ${item.name}`} key={indx}>
          <i className={`icon ion-${item.icon}`}></i>
          <h1>{item.name}</h1>
          <p>
            Single-origin coffee mustache knausgaard, butcher hella crucifix
            cardigan dreamcatcher offal bitters thundercats tbh. Banh mi echo
            park pabst, gochujang hell of PBRB poke trust fund hexagon af
            typewriter.
          </p>
        </div>
      );
    });
  };
  return (
    <section className="feature-section">
      <div className="container">
        <div className="title-heading">
          <h3>Log your workouts</h3>
          <h1>Keep track of your daily workouts</h1>
          <p>
            Letterpress put a bird on it celiac VHS, plaid everyday carry
            dreamcatcher kale chips hammock humblebrag.
          </p>
        </div>
        <div className="feature-grid">{renderItems()}</div>
      </div>
    </section>
  );
};

export default SectionMidContent;
