import React from "react";
import "./feature.scss";

function Feature({ imgName, title, text }) {
  return (
    <div className="feature-wrapper">
      <div className="image-wrapper">
        <img src={require("../../assets/img/" + imgName + ".svg")} alt="sry" />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Feature;
