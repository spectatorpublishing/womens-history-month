import React from 'react';
import styled from 'styled-components';
import Logo from './logo'
import { Link } from 'react-router-dom';
import { device } from '../device';

const Navbar = () => {
    return (
        <Nav>
            <Logo/>
            <Link to="/">
                Home
            </Link>
            <Link to="/news">
                News
            </Link>
            <Link to="/a&e">
                Arts & Entertainment
            </Link>
            <Link to="/sports">
                Sports
            </Link>
            <Link to="/spectrum">
                Spectrum
            </Link>
            <Link to="/credits">
                Credits
            </Link>
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