import React from "react";

import "./FeaturedMugs.scss";

export default function FeaturedMugs() {
  return (
    <div className="featuredMugs">
      <div className="column">
        <div className="fon1"></div>
        <div className="text7">Pink Premium Ceramic</div>
        <div className="price">$ 99.00 USD</div>
      </div>
      <div className="column">
        <div className="fon2"></div>
        <div className="text7">Golden Designers Mug</div>
        <div className="price">
          <span className="discount">$50.00</span>{" "}
          <del className="del">$ 69.00 USD</del>
        </div>
      </div>
    </div>
  );
}
