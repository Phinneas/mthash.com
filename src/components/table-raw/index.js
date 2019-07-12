import React from "react";
import Button from "../button";
import "./table-raw.scss";

function TableRaw({
  difference,
  imgName,
  title,
  shtitle,
  price,
  totalHash,
  tokens,
  svgPath
}) {
  var diffState = "positive";
  var difference = difference;
  var diffColor = "#8DCC4E";

  if (parseFloat(difference) < 0) {
    diffState = "negative";
    difference = difference.substring(1, difference.lenght);
    diffColor = "#CC4E4E";
  }

  return (
    <li className="table-raw">
      <div className="title-wrapper">
        <img
          className="icon"
          src={require("../../assets/img/" + imgName + ".png")}
          alt="sry"
        />
        <p className="title regular-text">
          {title} &nbsp;<span>{shtitle}</span>
        </p>
      </div>
      <div className="price-wrapper">
        <p className="price regular-text">${price}</p>
        <div className={"difference-wrapper " + diffState}>
          <div className="arrow" />
          <p className="value regular-text">{difference}%</p>
        </div>
      </div>
      <p className="total-hash-value regular-text">{totalHash} TH/s</p>
      <p className="tokens-value regular-text">{tokens}</p>
      <div className="token-graph-wrapper">
        <svg viewBox="0 0 123 43" fill="none">
          <path d={svgPath} stroke={diffColor} strokeWidth="2" />
        </svg>
      </div>
      <div className="action-wrapper">
        <Button className="action-button" text="Mine" type="bordered" />
      </div>
    </li>
  );
}

export default TableRaw;
