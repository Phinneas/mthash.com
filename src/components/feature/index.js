import React from "react";
import "./feature.scss";

function Feature({ imgName, title, text, iconClassName, format = "png" }) {
  return (
    <div className="feature-wrapper">
      <div className="image-wrapper">
        <img
          className={iconClassName}
          src={require(`../../assets/img/${imgName}.${format}`)}
          alt="sry"
        />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Feature;
