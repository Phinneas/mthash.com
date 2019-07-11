import React from "react";
import { Link } from "react-router-dom";
import "./feature-v2.scss";

function FeatureV2({ type, imgName, title, text, subText, format = "png" }) {
  return (
    <div className={`feature-v2-wrapper ${type}`}>
      <div className="icon">
        <img
          className="icon"
          src={require(`../../assets/img/${imgName}.${format}`)}
          alt="sry"
        />
      </div>
      <h3 className="title">{title}</h3>
      <p className="text">
        {text}
        <br />
        {subText}
      </p>
      <div className="link">
        <Link to={{ pathname: "/token" }}>
          <p>Learn more</p>
        </Link>
      </div>
    </div>
  );
}

export default FeatureV2;
