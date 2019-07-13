import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./footer.scss";

const FooterWithPath = withRouter(props => <Footer {...props} />);

function Footer(props) {
  if (
    props.location.pathname !== "/signUp" &&
    props.location.pathname !== "/signIn"
  )
    return (
      <div className="footer-wrapper">
        <div className="inner-wrapper">
          <div className="left-wrapper">
            <div className="logo-wrapper">
              <img
                src={require("../../assets/img/footer/logo-white.svg")}
                alt="sry"
              />
              <h1 className="logo-text">mthash</h1>
            </div>
            <div className="copyright">
              <p>© 2019 MtHash</p>
            </div>
          </div>
          <div className="right-wrapper">
            <ul className="products">
              <li className="header">Products</li>
              <Link to={{ pathname: "/token" }}>
                <li>Token</li>
              </Link>
              <li>Mining</li>
              <li>Exchange</li>
              <li>Wallet</li>
              <li>Pay</li>
            </ul>
            <ul className="learn">
              <li className="header">Learn</li>
              <li>Hash Power</li>
              <li>Algorithms</li>
              <li>Arcade Mining</li>
              <li>White Paper</li>
              <li>Earn Hash Tokens</li>
            </ul>
            <ul className="company">
              <li className="header">Company</li>
              <Link to={{ pathname: "/company" }}>
                <li>About</li>
              </Link>
              <li>Careers</li>
              <li>Fees</li>
              <li>Legal & Privacy</li>
              <li>Support</li>
            </ul>
            <ul className="social">
              <li className="header">Social</li>
              <li>
                <div className="social-item">
                  <img
                    src={require("../../assets/img/footer/twitter.png")}
                    alt="sry"
                  />
                </div>
                <div className="social-item">
                  <img
                    src={require("../../assets/img/footer/facebook.png")}
                    alt="sry"
                  />
                </div>
                <div className="social-item">
                  <img
                    src={require("../../assets/img/footer/youtube.png")}
                    alt="sry"
                  />
                </div>
                <div className="social-item">
                  <img
                    src={require("../../assets/img/footer/instagram.png")}
                    alt="sry"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  else return null;
}

export default FooterWithPath;
