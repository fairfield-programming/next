import React from 'react';
import '../styles/label.css';

export default function Label({ children, mx, light }) {

    if (light != undefined) light = "light";
    if (mx == undefined) mx = "unset";

    return <div className={`label ${light}`} style={{ margin: `0px ${mx}` }}>{ children }</div>;

}