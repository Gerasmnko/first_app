import React from "react";

import "./FirstBanner.scss";

export default function FirstBanner() {
  return (
    <div className="firstBanner">
      <div className="content">
        <div className="profile2">
          <div className="text1">Best place to buy design</div>
          <div className="text2">Coffee Mugs</div>
          <div className="text3">
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </div>
        </div>

        <form action="#">
          <button className="button1" type="submit">
            EXPLORE OUR PRODUCTS
          </button>
        </form>
      </div>
    </div>
  );
}
