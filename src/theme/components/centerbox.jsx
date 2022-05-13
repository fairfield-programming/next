import React from 'react';
import '../styles/centerbox.css';

export default function Centerbox({ children, tall }) {

    let attributes = "";

    if (tall !== undefined) attributes += 'tall';

    return <div className={`centerbox ${attributes}`}>{ children }</div>;

}