import React from 'react';

/** @jsx jsx */
import { Link, jsx } from 'theme-ui';

export default function Footer() {

    return (
        <footer
        sx={{
            fontSize: 1,
            variant: 'styles.footer',
        }}>
            <div sx={{
                bg: 'background01'
            }}>
                <div
                    sx={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(4, 32px)',
                    gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
                    gridAutoFlow: 'column',
                    px: 2,
                    py: 4,
                    maxWidth: 800,
                    mx: 'auto'
                    }}>
                    <Link href="/" sx={{ variant: 'links.navlink', p: 2 }}>
                        Home
                    </Link>
                    <Link href="/about" sx={{ variant: 'links.navlink', p: 2 }}>
                        About
                    </Link>
                    <Link href="/search" sx={{ variant: 'links.navlink', p: 2 }}>
                        Search
                    </Link>
                    <Link href="/learn" sx={{ variant: 'links.navlink', p: 2 }}>
                        Learn
                    </Link>
                    <Link href="/questions" sx={{ variant: 'links.navlink', p: 2 }}>
                        Questions
                    </Link>
                    <Link href="/privacy" sx={{ variant: 'links.navlink', p: 2 }}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms" sx={{ variant: 'links.navlink', p: 2 }}>
                        Terms of Service
                    </Link>
                </div>
                <div
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3,
                        bg: 'background02',
                        m: 0,
                        fontFamily: 'body',
                        lineHeight: 'body',
                        fontWeight: 'body'
                    }}>
                    <Link href="/privacy" sx={{ color: 'inherit' }}>
                    Privacy Policy
                    </Link>
                    <div sx={{ mx: 1 }} />
                    <Link href="/terms" sx={{ color: 'inherit' }}>
                    Terms of Service
                    </Link>
                    <div sx={{ mx: 1 }} />
                    © {new Date().getFullYear()} The Fairfield Programming Association
                </div>
            </div>
        </footer>
    );

}