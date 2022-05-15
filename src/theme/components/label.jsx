import React from 'react';
import '../styles/label.css';

export default function Label({ children, light }) {

    if (light != undefined) light = "light";

    return <div className={`label ${light}`}>{ children }</div>;

}