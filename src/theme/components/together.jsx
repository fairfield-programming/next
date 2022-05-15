import React from 'react';
import '../styles/together.css';

export default function Together({ children, inline }) {

    if (inline !== undefined) inline = "inline";

    return <div className={`together ${inline}`}>{ children }</div>;

}