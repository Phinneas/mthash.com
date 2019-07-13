import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import "./signUp.scss";

export default class SignUp extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "MtHash - Sign Up";
  }
  render() {
    return (
      <div className="signUp-wrapper">
        <div className="header">
          <Link to={{ pathname: "/" }}>
            <div className="logo-wrapper">
              <div className="image-wrapper">
                <img
                  src={require("../../assets/img/footer/logo-white.png")}
                  alt="sry"
                />
              </div>
              <p>mthash</p>
            </div>
          </Link>
          <div className="buttons-wrapper">
            <input type="checkbox" id="drop" />
            <label htmlFor="drop">
              <p>Products</p>
            </label>
            <Link>
              <p>Help</p>
            </Link>
            <Link to={{ pathname: "/signIn" }}>
              <p>Sign In</p>
            </Link>
            <Link to={{ pathname: "/signUp" }}>
              <Button
                text="Sign Up"
                type="bordered"
                className="sign-up-button"
              />
            </Link>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="form-wrapper">
            <h3>Create your account</h3>
            <div className="form">
              <div className="logo">
                <div className="image-wrapper">
                  <img src={require("../../assets/img/logo.png")} alt="sry" />
                </div>
                <p>mthash</p>
              </div>
              <Input type="withIcon" icon="user" placeholder="Username" />
              <Input type="withIcon" icon="email" placeholder="Email" />
              <Input type="withIcon" icon="key" placeholder="Password" />
              <div className="agreement">
                <input type="checkbox" id="agree" defaultChecked />
                <label className="checkmark" htmlFor="agree">
                  <svg viewBox="0 0 9 9">
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        className="check"
                        transform="translate(-598.000000, -361.000000)"
                        stroke="#354051"
                        strokeWidth="2"
                      >
                        <g transform="translate(587.000000, 244.000000)">
                          <polyline
                            id="Path"
                            points="12 121.616211 14.4404663 124.232422 19.0205078 119"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </label>
                <p>
                  I certify that I am 18 years of age or older, and I agree to
                  the <Link>User Agreement</Link> and{" "}
                  <Link>Privacy Policy</Link>.{" "}
                </p>
              </div>
              <Button text="Create account" type="green large" />
            </div>
            <Link to={{ pathname: "/signIn" }}>
              <p>Already have an account?</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
