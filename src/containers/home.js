import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import image from '../components/images/primaryImage.png'
import Letter from '../components/editorLetter';
import NextSection from '../components/nextSection';
import Banner from '../components/titleBanner';

const HomeContainer = styled.div`

`;

const Home = () => (
    <HomeContainer>
        <Banner/>
        <Letter/>
        <NextSection nextseclink='/article' nextsec='News' image={image}></NextSection>
    </HomeContainer>
);

export default Home;