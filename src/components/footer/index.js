import React from 'react';
import {
    Link,
    withRouter
  } from "react-router-dom";
import './footer.scss';

const FooterWithPath = withRouter(props => <Footer {...props}/>);

function Footer(props) {
    if(props.location.pathname !== "/signUp" && props.location.pathname !== "/signIn")
    return (
        <div className="footer-wrapper">
            <div className="left-wrapper">
                <div className="logo-wrapper">
                    <img src={require('../../assets/img/footer/logo-white.png')} alt="sry"></img>
                    <h1 className="logo-text">mthash</h1>
                </div>
                <div className="copyright">
                    <p>© 2019 MtHash</p>
                </div>
            </div>
            <div className="right-wrapper">
                <ul className="products">
                    <li className="header">Products</li>
                    <Link to={{pathname: "/token"}}><li>Token</li></Link>
                    <li>Mining</li>
                    <li>Exchange</li>
                    <li>Pay</li>
                </ul>
                <ul className="company">
                    <li className="header">Company</li>
                    <Link to={{pathname: "/company"}}><li>About</li></Link>
                    <li>Careers</li>
                    <li>Legal & Privacy</li>
                    <li>Support</li>
                </ul>
                <ul className="social">
                    <li className="header">Social</li>
                    <li>
                        <div className="social-item">
                            <img src={require('../../assets/img/footer/twitter.png')} alt="sry"></img>
                        </div>
                        <div className="social-item">
                            <img src={require('../../assets/img/footer/facebook.png')} alt="sry"></img>
                        </div>
                        <div className="social-item">
                            <img src={require('../../assets/img/footer/linkedin.png')} alt="sry"></img>
                        </div>
                        <div className="social-item">
                            <img src={require('../../assets/img/footer/instagram.png')} alt="sry"></img>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
    else return(null);
}

export default FooterWithPath;
