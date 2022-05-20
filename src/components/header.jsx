import React from 'react';

import './header.css';

/** @jsx jsx */
import { Link, jsx } from 'theme-ui';

import Avatar from '../theme/components/avatar';
import Heading from '../theme/components/heading';

import cleanUser from '../generators/User'

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Topbar() {

    let isLoggedIn = cookies.get('userId') != undefined;
    let userData = cleanUser(cookies.get('userData'))

    return (
    <div className="headerParent">
        <header>
            <div className='left'>
                <a>
                    Our Programs
                    <div>
                        <Heading type="h3">Online Programs</Heading>
                        <p className='grid'>
                            <a href="/learn">Learning</a>
                            <a href="/questions">Questions</a>
                        </p>
                    </div>
                </a>
            </div>
            <div className='center'>
                <a href="/" title="Home">
                    <img
                        alt="FPA Logo"
                        height={50}
                        src="/full.svg"
                    />
                    <span
                        sx={{
                        position: 'absolute',
                        width: 1,
                        height: 1,
                        overflow: 'hidden',
                        top: -9999,
                        }}>
                        Home
                    </span>
                </a>
            </div>
            { 
                (isLoggedIn) ? (
                    <div className='right'>
                        <a href={"/settings"}>{ userData.firstname }</a>
                        <a href={"/settings"}>
                        <Avatar src={userData.profilePicture} username={userData.fullname} />
                        </a>
                    </div>
                ) : (
                    <div className='right'>
                        <a href="/about">
                            About
                        </a>
                        <a href="/login">
                            Log In
                        </a>
                    </div>
                )
            }
            
        </header>
    </div>);

}