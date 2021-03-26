import React from 'react';
import styled from 'styled-components';
import logo from '../assets/spectator-logo.svg';

const Logo = () => {
    return (
        <a href="/">
            <Wrapper>
                <img src={logo} alt="Columbia Spectator Logo"></img>
            </Wrapper>
        </a>
    );
};

export default Logo;

const Wrapper = styled.div`
    margin: 1rem;
    padding: 1rem;
    img {
        width: 12rem;
    }
`;