import React from "react";

import "./PremiumOffer.scss";

export default function PremiumOffer() {
  return (
    <div className="premOffer">
      <div className="leftpart">
        <div className="note"></div>
        <div className="upbot">
          <div className="upcup"></div>
          <div className="bottomcup"></div>
        </div>
      </div>
      <div className="rightpart">
        <div className="text8">Premium offer task 1</div>
        <div className="text9">Get our Coffee Magazine</div>
        <div className="text10">
          The most versatile furniture system ever created. Designed to fit your
          life and so on.
        </div>
        <form action="#">
          <button className="button2" type="submit">
            START SHOPPING
          </button>
        </form>
      </div>
    </div>
  );
}
