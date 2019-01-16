import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className="InputElement" {...props.elementConfig} value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea className="InputElement" {...props.elementConfig} value={props.value} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className="InputElement"
                    value={props.value}>
                </select>);
            break;
        default:
            inputElement = <input className="InputElement" {...props.elementConfig} value={props.value} />;
    }

    return (
        <div className="Input">
            <lable className="Label">{props.label}</lable>
            {inputElement}
        </div>
    );
}

export default input;