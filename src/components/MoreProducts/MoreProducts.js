import React from "react";

import "./MoreProducts.scss";

export default function MoreProducts() {
  return (
    <div className="moreProducts">
      <div className="column">
        <div className="cup1"></div>
        <div className="text7">Red Love Cup</div>
        <div className="price">
          <span className="discount">$25.00</span>{" "}
          <del className="del">$ 37.00 USD</del>
        </div>
      </div>
      <div className="column">
        <div className="cup2"></div>
        <div className="text7">Black Tea Cup</div>
        <div className="price">
          <span className="discount">$15.00</span>{" "}
          <del className="del">$ 29.00 USD</del>
        </div>
      </div>
      <div className="column">
        <div className="cup3"></div>
        <div className="text7">B&W Essentials Mug</div>
        <div className="price">
          <del className="del1">$ 19.00 USD</del>
        </div>
      </div>
      <div className="column">
        <div className="cup4"></div>
        <div className="text7">Winter Style Mug</div>
        <div className="price">$ 25.00 USD</div>
      </div>
      <div className="column">
        <div className="cup5"></div>
        <div className="text7">Ceramic Tea</div>
        <div className="price">$ 46.00 USD</div>
      </div>
      <div className="column">
        <div className="cup6"></div>
        <div className="text7">No Handle Bar Cup</div>
        <div className="price">$ 34.00 USD</div>
      </div>
      <div className="column">
        <div className="cup7"></div>
        <div className="text7">Espresso Cup by Mugs.co</div>
        <div className="price">$ 25.00 USD</div>
      </div>
      <div className="column">
        <div className="cup8"></div>
        <div className="text7">Pink Premium Ceramic</div>
        <div className="price">$ 99.00 USD</div>
      </div>
      <div className="column">
        <div className="cup9"></div>
        <div className="text7">Summer Designer Cup</div>
        <div className="price">$ 29.00 USD</div>
      </div>
    </div>
  );
}
