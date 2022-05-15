import React from 'react';
import '../styles/body.css';

export default function Body({ children, width, padding }) {

    if (width == undefined) width = "800px";
    if (padding == undefined) padding = "25px";
    
    return <div style={{ maxWidth: width, padding }} className="body">{ children }</div>;

}