import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import NextSection from '../components/nextSection';

const HomeContainer = styled.div`
    background: #FCF7EC;
    width: 1440px;
    height: 1950px;
`


const Home = () => (
    <HomeContainer>
        Home
        <NextSection nextseclink='/article' nextsec='News'></NextSection>
    </HomeContainer>



);

export default Home;