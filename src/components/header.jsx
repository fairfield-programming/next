import React from 'react';

/** @jsx jsx */
import { Link, jsx } from 'theme-ui';

export default function Topbar() {

    return (
    <div sx={{
        borderBottom: "1px solid #ddd",
        position: 'fixed',
        // width: '100%',
        left: 0,
        right: 0,
        top: 0,
        bg: 'background'
    }}>
        <header sx={{
            display: 'grid',
            gridGap: 3,
            maxWidth: 1000,
            mx: 'auto',
            px: 1,
            py: 1,
            gridAutoFlow: 'row',
            gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
            variant: 'styles.header',
            fontFamily: "heading"
        }}>
            <div sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gridColumnStart: [1, 2],
                gridColumnEnd: [3, 3],
                order: [0, 1],
                }}>
                <Link href="/" title="Home">
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
                </Link>
            </div>
            <div
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                }}>
                <Link
                href="/learn"
                sx={{
                    variant: 'links.navlink',
                    p: 2,
                }}>
                Learn
                </Link>
                <Link
                href="/questions"
                sx={{
                    variant: 'links.navlink',
                    p: 2,
                }}>
                Questions
                </Link>
            </div>
            <div
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                order: 2,
                }}>
                <Link
                href="/about"
                sx={{
                    variant: 'links.navlink',
                    p: 2,
                }}>
                About
                </Link>
                <Link
                href="/login"
                sx={{
                    variant: 'links.navlink',
                    p: 2,
                }}>
                Log In
                </Link>
            </div>
        </header>
    </div>);

}