import React from 'react';
import {
    Link
  } from "react-router-dom";
import './feature-v2.scss';

function FeatureV2(props) {
    return (
        <div className={"feature-v2-wrapper "+props.type}>
            <div className="icon">
                <img className="icon" src={require('../../assets/img/'+props.imgName+'.png')} alt="sry"></img>
            </div>
            <h3 className="title">{props.title}</h3>
            <p className="text">{props.text}<br></br>{props.subText}</p>
            <div className="link">
                <Link to={{pathname: "/token"}}><p>Learn more</p></Link>
            </div>
        </div>
    );
}

export default FeatureV2;
