import React from 'react';
import './footer.css';

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className='quickLinks'>
                    <a href="/">
                        Home
                    </a>
                    <a href="/about">
                        About
                    </a>
                    <a href="/search">
                        Search
                    </a>
                    <a href="/learn">
                        Learn
                    </a>
                    <a href="/signup">
                        Sign Up
                    </a>
                    <a href="/login">
                        Log In
                    </a>
                    <a href="/questions">
                        Questions
                    </a>
                    <a href="/privacy">
                        Privacy Policy
                    </a>
                    <a href="/terms">
                        Terms of Service
                    </a>
                </div>
            </div>
            <div className='fixedFooter'>
                <a href="/privacy">
                Privacy Policy
                </a>
                <a href="/terms">
                Terms of Service
                </a>
                © {new Date().getFullYear()} The Fairfield Programming Association Inc.
            </div>
        </footer>
    );

}