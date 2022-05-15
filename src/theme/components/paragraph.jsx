import React from 'react';
import '../styles/paragraph.css';

export default function Paragraph({ children, thinner }) {

    if (thinner !== undefined) thinner = "thinner";

    return <p className={`paragraph ${thinner}`}>{ children }</p>;

}