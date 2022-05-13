import React from 'react';
import '../styles/heading.css';

export default function Heading({ type, children }) {

    if (type === "h1") return <h1 className="heading">{ children }</h1>;
    if (type === "h2") return <h2 className="heading">{ children }</h2>;
    if (type === "h3") return <h3 className="heading">{ children }</h3>;
    if (type === "h4") return <h4 className="heading">{ children }</h4>;
    if (type === "h5") return <h5 className="heading">{ children }</h5>;
    return <h6 className="heading">{ children }</h6>;

}