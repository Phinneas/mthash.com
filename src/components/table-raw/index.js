import React from 'react';
import Button from '../button'
import './table-raw.scss';

function TableRaw(props) {
    var diffState = "positive";
    var difference = props.difference;
    if(parseFloat(props.difference) < 0){ 
        diffState = "negative";
        difference = difference.substring(1,difference.lenght);
    }
    return (
        <li className="table-raw">
            <div className="title-wrapper">
                <img className="icon" src={require('../../assets/img/'+props.imgName+'.png')} alt="sry"></img>
                <p className="title regular-text">{props.title} &nbsp;<span>{props.shtitle}</span></p>
            </div>
            <div className="price-wrapper">
                <p className="price regular-text">${props.price}</p>
                <div className={"difference-wrapper " + diffState}>
                    <div className="arrow"></div>
                    <p className="value regular-text">{difference}%</p>
                </div>
            </div>
            <p className="total-hash-value regular-text">{props.totalHash} TH/s</p>
            <p className="tokens-value regular-text">{props.tokens}</p>
            <div className="token-graph-wrapper">
                <svg viewBox="0 0 123 43" fill="none" >
                    <path d={props.svgPath} stroke="#8DCC4E" strokeWidth="2"/>
                </svg>
            </div>
            <div className="action-wrapper">
                <Button text="Mine" type="dark"></Button>
            </div>
        </li>
    );
}

export default TableRaw;
