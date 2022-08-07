import React, { useState } from "react";

import "./Input.scss";

function Input() {
  const [email, setEmail] = useState("customer@coffestyle.io");
  return (
    <input
      className="input"
      name="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
  );
}

export default Input;
