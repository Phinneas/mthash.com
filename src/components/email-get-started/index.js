import React from "react";

import Input from "../input";
import Button from "../button";

import "./email-get-started.scss";

function EmailGetStarted() {
  return (
    <div className="wrapper">
      <Input
        type="dark button"
        buttonText="Get Started"
        placeholder="Your email address"
      />
      <Button className="get-started-button" type="dark" text="Get Started" />
    </div>
  );
}

export default EmailGetStarted;
