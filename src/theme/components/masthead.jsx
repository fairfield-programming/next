import React from 'react';
import '../styles/masthead.css';

export default function Masthead({ theme, layout, children, color, inline }) {

    theme ||= "";
    layout ||= "bottomLeft"
    let inlineStyle = '';

    if (color != undefined) theme = "color";
    if (inline != undefined) inlineStyle = "inline";

    return <div className={`masthead ${theme} ${layout}`}>
            <div className={`mastheadInner ${theme} ${inlineStyle}`}>
                { children }
            </div>
        </div>;

}