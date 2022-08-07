import React from "react";

import "./LastBanner.scss";

import Input from "./Input/Input";

export default function LastBanner() {
  return (
    <div className="lastBanner">
      <div className="string3">Sign up and get free coffee bags</div>
      <div className="text13">Coffee Updates</div>
      <form action="#">
        <Input />
        <button className="button3" type="submit">
          subscribe
        </button>
      </form>
    </div>
  );
}
