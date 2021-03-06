import React from 'react';
import {
    useLocation,
    Link
} from "@reach/router";
import '../styles/bin.css';

export default function Bin({ children, vertical }) {

    if (vertical !== undefined) return <div className="bin">
        <div className="vertBin">
            { children }
        </div>
    </div>;

    return <div className="bin">
        <div className="binCenter">
            { children }
        </div>
    </div>;

}

export function BinLink({ to, text }) {

    let active = "";

    if (to === useLocation().pathname) active = "active";

    return <Link className={`binLink ${active}`} to={to}>{ text }</Link>;

}