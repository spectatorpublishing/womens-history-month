import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import Letter from '../components/editorLetter';
import Banner from '../components/titleBanner';

const Home = () => {
    return(
        <main>
            <Banner/>
            <Letter/>
        </main>
    );
};

export default Home;