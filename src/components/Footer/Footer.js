import React from "react";

import "./Footer.scss";

export default function Footer({ links }) {
  return (
    <footer className="footer">
      <div className="column2">
        <a href="/" className="logo2"></a>
        <div className="text15">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </div>
        <div className="price">CoffeeStyle Inc. © 1996</div>
      </div>
      <div className="column2">
        <div className="text12">menu</div>
        <ul className="footerLinks">
          {links.map((link) => {
            return (
              <li key={link.title} className="link2">
                {link.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="column2">
        <div className="text12">follow us</div>
        <ul className="footerLinks">
          <li className="link2">facebook</li>
          <li className="link2">instagram</li>
          <li className="link2">pinterest</li>
          <li className="link2">twitter</li>
        </ul>
      </div>
      <div className="column2">
        <div className="text12">contact us</div>
        <div className="text11">We’re Always Happy to Help</div>
        <div className="text14">us@coffeestyle.io</div>
        <div className="price">Powered by Webflow</div>
      </div>
    </footer>
  );
}
