import React from "react";

import Input from "../input";
import Button from "../button";

import "./email-get-started.scss";

function EmailGetStarted({
  buttonType = "dark",
  buttonText = "Get Started",
  className,
  buttonClassName
}) {
  return (
    <div className={`wrapper ${className ? className : ""}`}>
      <Input
        className="email-input"
        type="dark button"
        buttonText="Get Started"
        placeholder="Your email address"
      />
      <Button
        className={`get-started-button ${
          buttonClassName ? buttonClassName : ""
        }`}
        text={buttonText}
        type={buttonType}
      />
    </div>
  );
}

export default EmailGetStarted;
