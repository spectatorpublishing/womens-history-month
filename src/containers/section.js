import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import Article1 from '../components/article1';

const Section = () => {
    return(
        <>
        <div>Section</div>
        <Article1
            title1="This is an article title and it is a news article"
            author1="John Doe and Jane Doe"
            imageURL1 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link1= '/article'

            title2="This is an article title and it is a news article"
            author2="John Doe and Jane Doe"
            imageURL2 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link2= '/article'
        />
        <Article1
            title1="This is an article title and it is a news article"
            author1="John Doe and Jane Doe"
            imageURL1 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link1= '/article'

            title2="This is an article title and it is a news article"
            author2="John Doe and Jane Doe"
            imageURL2 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link2= '/article'
        />
        </>
    );
};

export default Section;