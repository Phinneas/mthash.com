import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HomePage from "../../pages/home";
import TokenPage from "../../pages/token";
import AboutPage from "../../pages/about";
import SignUp from "../../pages/signUp";
import SignIn from "../../pages/signIn";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";



export default class AppRouter extends React.Component {
  render(){
    return (
      <Router>
        <div className="main-wrapper">
          <Header item_1='Company' item_2='Token' item_3='Mining' item_4='Exchange' />
          <Route path="/" exact component={HomePage} />
          <Route path="/token" component={TokenPage} />
          <Route path="/company" component={AboutPage} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}