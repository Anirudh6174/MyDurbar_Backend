import React from "react";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="hp-banner">
      <div className="hp-banner-wrapper">
        <img
          src="https://i.postimg.cc/T2Q7yQZV/png-20220720-085116-0000.png"
          alt=""
        />
        <div className="hp-banner-action-wrapper">
          <div className="hp-banner-action-details">
            <h3>Artist Manager?</h3>
            <h2 className="hp-banner-action-description">
              Use myDurbar.com to easily manage <br /> your Clients, Events,
              Schedules and Much More!
            </h2>
          </div>
          <div className="hp-banner-action-button">
            <a href="/contactus">
              <button className="step-orangeBtn">book demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
