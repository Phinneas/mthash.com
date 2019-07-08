import React from 'react';
import './feature.scss';

function Feature(props) {
    return (
        <div className="feature-wrapper">
            <div className="title-wrapper">
                <div className="icon">
                    <img src={require('../../assets/img/'+props.imgName+'.png')} alt="sry"></img>
                </div>
                <h3 className="title">{props.title}</h3>
            </div>
            <p className="text">{props.text}</p>
        </div>
    );
}

export default Feature;
