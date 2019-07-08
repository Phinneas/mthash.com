import React from "react";
import Input from '../../components/input';
import Button from '../../components/button';
import {
    Link
  } from "react-router-dom";
import './signIn.scss';

export default class SignIn extends React.Component {
    componentDidMount(){
        window.scrollTo(0,0);
        document.title = "MtHash - Sign In";
    }
    render(){
        return (
            <div className="signIn-wrapper">
                 <div className="header">
                    <Link to={{pathname: "/"}}>
                        <div className="logo-wrapper">
                            <div className="image-wrapper">
                                <img src={require('../../assets/img/footer/logo-white.png')} alt="sry"></img>
                            </div>
                            <p>mthash</p>
                        </div>
                    </Link>
                    <div className="buttons-wrapper">
                        <input type="checkbox" id="drop"></input>
                        <label htmlFor="drop">
                                <p>Products</p>
                        </label>
                        <Link><p>Help</p></Link>
                        <Link to={{pathname: "/signIn"}}><p>Sign In</p></Link>
                        <Link to={{pathname: "/signUp"}}><Button text="Sign Up" type="bordered"/></Link>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="form-wrapper">
                        <h3>Sign in to MtHash</h3>
                        <div className="form">
                            <div className="logo">
                                <div className="image-wrapper">
                                    <img src={require('../../assets/img/logo.png')} alt="sry"></img>
                                </div>
                                <p>mthash</p>
                            </div>
                            <Input type="withIcon" icon="email" placeholder="Email"></Input>
                            <Input type="withIcon" icon="key" placeholder="Password"></Input>
                            <div className="agreement">
                                <input type="checkbox" id="agree" defaultChecked></input>
                                <label className="label-wrapper" htmlFor="agree">
                                    <div className="checkmark">
                                        <svg viewBox="0 0 9 9">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                                <g className="check" transform="translate(-598.000000, -361.000000)" stroke="#354051" strokeWidth="2">
                                                    <g transform="translate(587.000000, 244.000000)">
                                                        <polyline id="Path" points="12 121.616211 14.4404663 124.232422 19.0205078 119"></polyline>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <p>Remember me</p>
                                </label>
                                <p><Link>Forgot password?</Link></p>
                            </div>
                            <Button text="Sign In" type="dark large"/>
                            <div className="help">
                                <Link to={{pathname: "/signIn"}}><p>Need help?</p></Link>
                                <div className="divider"></div>
                                <Link to={{pathname: "/signIn"}}><p>Privacy Policy</p></Link>
                            </div> 
                        </div>
                        <Link to={{pathname: "/signUp"}}><p>Don’t have an account yet?</p></Link>
                    </div>
                </div>
            </div>
        );
    }
  }