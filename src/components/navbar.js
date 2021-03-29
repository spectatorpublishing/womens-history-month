import { React, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Logo from './logo'
import { NavLink } from 'react-router-dom';
import { device } from '../device';
import  { BsFillDiamondFill } from 'react-icons/bs';
import  { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 2rem;
    position: sticky;
    top: 0rem;
    background-color: #FCF7EC;
    margin: 0rem 0rem 0rem 0rem;

    .react-icons{
        margin: 2rem 0rem -2rem 0rem;

        @media only screen and (max-width: 1023px){
            display: none;
        }
    }

    .menu {
        display: none;

        @media only screen and (max-width: 1023px){
            display: block;
            margin: auto 2rem auto 25rem;
            font-size: 30px;
        }

        @media only screen and (max-width: 690px){
            margin: auto 2rem auto 20rem;
        }

        @media only screen and (max-width: 609px){
            margin: auto 2rem auto 15rem;
        }

        @media only screen and (max-width: 609px){
            margin: auto 2rem auto 15rem;
        }

        @media only screen and (max-width: 500px){
            margin: auto 2rem auto 10rem;
        }

        @media only screen and (max-width: 425px){
            margin: auto 2rem auto 7rem;
        }

        @media only screen and (max-width: 375px){
            margin: auto 2rem auto 4rem;
        }

        @media only screen and (max-width: 320px){
            margin: auto 2rem auto 1rem;
        }
        
    }

    a{
        color: black;
        text-decoration: none;

        &.active {
            padding-bottom: 0rem;
            border-bottom: 3px solid #000000;
            transition: all 0.2s ease;
    
            @media only screen and (max-width: 1023px){
                padding: 0.5rem 0rem 0.5rem 0rem;
                border-bottom: 0px solid #000000;
                transition: none;
                background: #FDC089;
                width: 70vw;
            }
    
            @media only screen and (max-width: 560px){
                padding: 0.5rem 0rem 0.5rem 0rem;
            }
            @media only screen and (max-width: 420px){
                padding: 0.5rem 0rem 0.5rem 0rem;
            }
        }
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: khula;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    margin: 0rem auto 0rem auto;
    border-bottom: 3px solid #CDCDCD;

    @media only screen and (max-width: 1023px){
        flex-direction: column;
    }

    @media only screen and (max-width: 1023px){
        border-bottom: 0px solid #000000;
        font-family: Prata;
        font-size: 18px;
        line-height: 41px;
        text-align: center;
        margin: 0rem auto 0rem auto;
    }
`;

const Link = styled.div`
    
    padding: 1rem 2rem;
    margin: 0rem auto -0.2rem auto;
    border-bottom: 3px solid #CDCDCD;

    &:hover{
        border-bottom: 3px solid #000000;
        transition: all 0.2s ease;

        @media only screen and (max-width: 1023px){
            padding-bottom: none;
            border-bottom: 0px solid #000000;
            transition: none;
            background: #FDC089;
        }
    }


    @media only screen and (max-width: 1259px){
        padding: 1rem 1rem;
    }

    @media only screen and (max-width: 1023px){
        padding-bottom: none;
        border-bottom: 0px solid #000000;
        transition: none;
        padding: 0rem;
    }

    @media only screen and (max-width: 425px){
        padding: 0.5rem 0rem 0.5rem 0rem;
    }
`;

const MenuItems = [
    {
        title: "Home",
        url: "/",
        exact: true,
    },
    {
        title: "News",
        url: "/news",
    },
    {
        title: "Arts & Entertainment",
        url: "/a&e",
    },
    {
        title: "Sports",
        url: "/sports",
    },
    {
        title: "Spectrum",
        url: "/spectrum",
    },
    {
        title: "Credits",
        url: "/credits",
    },
]


const Navbar = () => {
    const [show, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width > 1023){
            setToggle(true);
        }
    });

    return (
        <Wrapper>
            <Nav>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <BsFillDiamondFill/>
            </IconContext.Provider>
            <Row>
            <Logo/>
            <IconContext.Provider value={{ className: 'menu' }}>
                <GiHamburgerMenu onClick={() => setToggle(!show)}/>
            </IconContext.Provider>
            </Row>
            {MenuItems.map((item) => {
                return(
                    <>
                    {(show) ? 
                    <NavLink to={item.url} exact={item.exact} value={{ activeClassName: 'active' }}>
                        <Link activeClassName="active" onClick={() => setToggle(!show)}>
                                {item.title}
                        </Link>
                    </NavLink> : null}
                    </>
                )
            })}
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <BsFillDiamondFill/>
            </IconContext.Provider>
            </Nav>
        </Wrapper>
    );
};

export default Navbar;