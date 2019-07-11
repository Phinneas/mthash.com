import React from "react";
import ReactDOM from "react-dom";

import "./input.scss";

export default class Input extends React.Component {
  componentDidMount() {
    if (this.props.type === "dropdown") {
      const dropdownWrapper = ReactDOM.findDOMNode(this).querySelector(
        ".input-wrapper > .dropdown"
      );
      const dropdownItems = ReactDOM.findDOMNode(this).querySelectorAll(
        ".input-wrapper > .dropdown > li"
      );
      var dropdownSelectedItem = ReactDOM.findDOMNode(this).querySelector(
        ".input-wrapper > .dropdown > .selected"
      );

      // console.log(dropdownWrapper);
      dropdownItems.forEach(function(element, index) {
        element.addEventListener("click", function() {
          dropdownSelectedItem.classList.remove("selected");
          element.classList.add("selected");
          if (element !== dropdownSelectedItem)
            dropdownWrapper.removeChild(element);
          dropdownWrapper.insertBefore(element, dropdownSelectedItem);
          dropdownSelectedItem = element;
        });
      });
    }
  }
  render() {
    const { type, placeholder, icon = "email", className } = this.props;

    return (
      <div className="input-wrapper" type={type}>
        <input
          className={className}
          type="text"
          spellCheck="false"
          placeholder={placeholder}
        />
        <div className="icon">
          <img
            src={require("../../assets/img/input-icons/" + icon + ".svg")}
            alt="sry"
          />
        </div>
        <ul className="dropdown">
          <input type="checkbox" id="open" />
          <li className="selected">
            <div className="icon">
              <img
                src={require("../../assets/img/home/table-icons/icon2.png")}
                alt="sry"
              />
            </div>
            <label htmlFor="open">
              <div className="arrow" />
            </label>
          </li>
          <li>
            <div className="icon">
              <img
                src={require("../../assets/img/home/table-icons/icon5.png")}
                alt="sry"
              />
            </div>
            <label htmlFor="open">
              <div className="arrow" />
            </label>
          </li>
        </ul>
      </div>
    );
  }
}
