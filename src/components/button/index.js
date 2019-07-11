import React from "react";
import "./button.scss";

function Button({ type, className, text }) {
  return (
    <div className={`button-wrapper ${type} ${className}`}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
