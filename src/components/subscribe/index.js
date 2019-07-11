import React from "react";
// import Input from "../input";
// import Button from "../button";
import EmailGetStarted from "../email-get-started";
import "./subscribe.scss";

function Subscribe({ text, subText, buttonText }) {
  return (
    <section className="subscribe-wrapper">
      <img
        className="bg"
        src={require("../../assets/img/BG-footer.png")}
        alt="sry"
      />

      <div className="content-wrapper">
        <div className="left-column">
          <h1 className="title">{text}</h1>
          {subText && <p className="text">{subText}</p>}
        </div>
        <EmailGetStarted
          buttonType="green"
          buttonText={buttonText}
          className="right-column"
        />
      </div>
    </section>
  );
}

export default Subscribe;
