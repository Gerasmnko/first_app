import React from "react";

import "./Header.scss";

export default function Header({ links }) {
  return (
    <header className="header">
      <a href="/" className="logo"></a>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.title} className="link">
              {link.title}
            </li>
          );
        })}
      </ul>
      <div className="ending">
        <a href="/" className="imgbag"></a>
        <div className="profile">cart</div>
        <a href="/" className="imgzero"></a>
      </div>
    </header>
  );
}
