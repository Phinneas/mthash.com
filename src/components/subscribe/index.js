import React from 'react';
import Input from '../input';
import './subscribe.scss';

function Subscribe(props) {
    return (
        <section className="subscribe-wrapper">
            <img className="bg" src={require('../../assets/img/BG-footer.png')} alt="sry"></img>
            <h1 className="title">{props.text}</h1>
            <Input type="green button" buttonText={props.buttonText} placeholder="Your email address"></Input>
        </section>
    );
}

export default Subscribe;
