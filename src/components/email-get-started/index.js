import React from "react";

import Input from "../input";
import Button from "../button";

import "./email-get-started.scss";

function EmailGetStarted({
  buttonType = "dark",
  buttonText = "Get Started",
  className
}) {
  return (
    <div className={`wrapper ${className}`}>
      <Input
        type="dark button"
        buttonText="Get Started"
        placeholder="Your email address"
      />
      <Button
        className="get-started-button"
        text={buttonText}
        type={buttonType}
      />
    </div>
  );
}

export default EmailGetStarted;
