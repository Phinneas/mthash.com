import React from 'react';
import {
    Link,
    withRouter
  } from "react-router-dom";
import Button from '../button';
import ReactDOM from "react-dom";
import './header.scss';

const HeaderWithPath = withRouter(props => <Header {...props}/>);

class Header extends React.Component{
    componentDidMount(){
        if(this.props.location.pathname !== "/signUp" && this.props.location.pathname !== "/signIn"){
            //NAVIGATION SCRYPT//
            const menuItems = ReactDOM.findDOMNode(this).querySelectorAll('.menu-wrapper > li');
            const links = ReactDOM.findDOMNode(this).querySelectorAll('.header-wrapper a[href]');
            var lastLink = 0;
            links.forEach(function(element){
                element.addEventListener("click", function(){
                    var i;
                    menuItems[lastLink].className = "";
                    switch (element.getAttribute("href")){
                        default:
                        case "/": i = null; break;
                        case "/company": i = 0; break;
                        case "/token": i = 1; break;
                        case "/mining": i = 2; break;
                        case "/exchange": i = 3; break;
                    }
                    if(i != null){
                        menuItems[i].className = "active";
                        lastLink = i;
                    }
                })
            });
        }
    }
    render(){
        if(this.props.location.pathname !== "/signUp" && this.props.location.pathname !== "/signIn")
        return (
            <div className="header-wrapper">
                <Link to={{pathname: "/"}}>
                    <div className="logo-wrapper">
                        <div className="image-wrapper">
                            <img src={require('../../assets/img/logo-dark.png')} alt="sry"></img>
                            <img src={require('../../assets/img/logo.png')} alt="sry"></img>
                        </div>
                        <p>mthash</p>
                    </div>
                </Link>
                <ul className="menu-wrapper">
                    <li><Link to={{pathname: "/company"}}><p>{this.props.item_1}</p></Link></li>
                    <li><Link to={{pathname: "/token"}}><p>{this.props.item_2}</p></Link></li>
                    <li><Link><p>{this.props.item_3}</p></Link></li>
                    <li><Link><p>{this.props.item_4}</p></Link></li>
                </ul>
                <div className="buttons-wrapper">
                    <Link to={{pathname: "/signIn"}}><p>Sign In</p></Link>
                    <Link to={{pathname: "/signUp"}}><Button text="Get Started" type="bordered" className="sign-up-button"/></Link>
                </div>
            </div>
        );
        else return(null);
    }
}

export default HeaderWithPath;