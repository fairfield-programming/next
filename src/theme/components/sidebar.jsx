import React from 'react';
import '../styles/sidebar.css';

export default function Sidebar({ children, side }) {

    return <div className={`sidebar ${side}`}>{ children }</div>;

}