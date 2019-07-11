import React from "react";
import Button from "../../components/button";

import "./hash-token-price.scss";

function HashTokenPrice() {
  return (
    <div className="row-preview">
      <div>
        <img
          className="icon"
          src={require("../../assets/img/home/table-icons/icon1.png")}
          alt="sry"
        />
        <p className="title">
          Hash Token &nbsp;<span>HASH</span>
        </p>
      </div>
      <div className="hash-price-wrapper">
        <p className="price">$10.73</p>
        <div className="difference-wrapper positive">
          <div className="arrow" />
          <p className="value">0.73%</p>
        </div>
      </div>
      <div className="action-wrapper">
        <Button text="Buy" type="dark" />
      </div>
    </div>
  );
}

export default HashTokenPrice;
