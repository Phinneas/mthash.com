import React from 'react';
import './button.scss';

function Button(props) {
    return (
        <div className={"button-wrapper "+props.type}>
            <p>{props.text}</p>
        </div>
    );
}

export default Button;
