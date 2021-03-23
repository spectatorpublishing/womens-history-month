import { React, useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';

const Nav = styled.div`
    background-color: transparent;
    height: 36px;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 2rem;
    font-family: khula;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;

    @media ${device.laptopS} {
        //justify-content: flex-end;
        padding-bottom: 0rem;
    }
`;

const NavLink = styled.a`
    color: black;
    text-decoration: none;
    padding: 1rem 2rem;
    border-bottom: 3px solid #CDCDCD;

    &:hover{
        border-bottom: 3px solid #000000;
        transition: all 0.2s ease;
    }
`;

const Corner = styled.div`
    align-self: left;
    margin-top: 60px;
    width: 13px;
    height: 13px;

    background: #3D3D3D;
    transform: matrix(0.71, -0.71, -0.71, -0.71, 0, 0);
`;

const MenuItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "News",
        url: "/article",
    },
    {
        title: "Opinion",
        url: "/article",
    },
    {
        title: "Arts & Entertainment",
        url: "/article",
    },
    {
        title: "Spectrum",
        url: "/article",
    },
    {
        title: "Sports",
        url: "/article",
    },
    {
        title: "The Eye",
        url: "/article",
    },
    {
        title: "Credits",
        url: "/article",
    },
]

const Navbar = () => {
    return (
        <Nav>
            <Corner></Corner>
            {MenuItems.map((item) => {
                return(
                        <NavLink href={item.url}>
                            {item.title}
                        </NavLink>
                )
            })}
            <Corner></Corner>
        </Nav>
    );
};

export default Navbar;