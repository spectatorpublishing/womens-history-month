import React from 'react';
import styled from 'styled-components';
import Logo from './logo'
import { device } from '../device';

const Navbar = () => {
    return (
        <Nav>
            <Logo/>
            <a href="/">
                Home
            </a>
            <a href="/news">
                News
            </a>
            <a href="/a&e">
                Arts & Entertainment
            </a>
            <a href="/spectrum">
                Spectrum
            </a>
            <a href="/sports">
                Sports
            </a>
            <a href="/credits">
                Credits
            </a>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    font-family: Khula;
    font-size: 18px;
    margin: 0rem 6rem 0rem 3rem;

    a{
        text-decoration: none;
        padding: 0rem;
        color: black;
        margin: auto;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;