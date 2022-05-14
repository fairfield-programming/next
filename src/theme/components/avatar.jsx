import React from 'react';
import '../styles/avatar.css';

export default function Avatar({ src, username, size }) {

    size = size || 'small';

    return <img src={src} alt={`${username}'s Avatar`} className={`avatar ${size}`} />;

}