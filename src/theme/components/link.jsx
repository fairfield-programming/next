import React from 'react';
import '../styles/link.css';

export default function Link({ children, href, list }) {

    if (href == undefined) href = "/";
    if (list !== undefined) list = "list";

    return <a href={href} className={`link ${list}`}>{ children }</a>;

}