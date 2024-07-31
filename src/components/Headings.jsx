import React from 'react';
import "../styles/Headings.css";

export function BlueSmall(props) {
    return (
        <h5 className='BlueSmall'>{props.text}</h5>
    );
}

export function BlackLarge(props) {
    return (
        <h2 className='BlackLarge'>{props.text}</h2>
    );
}

export function GreySmall(props) {
    return (
        <p className='GreySmall'>{props.text}</p>
    );
}
