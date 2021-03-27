import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/section-title';
import Article1 from '../components/article1';
import ArticleCards from '../components/articleCards';
import NextSection from '../components/nextSection';
import ArticleCard from '../components/article-card';

const News = ({articles, header, next, nextLink}) => {
    return(
        <main>
        <SectionTitle title={header}/>
        <Desktop>
        <Article1
            title1="This is an article title and it is a news article"
            author1="John Doe and Jane Doe"
            imageURL1 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link1= '/news'

            title2="This is an article title and it is a news article"
            author2="John Doe and Jane Doe"
            imageURL2 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link2= '/news'
        />
        <ArticleCards/>
        <Article1
            title1="This is an article title and it is a news article"
            author1="John Doe and Jane Doe"
            imageURL1 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link1= '/news'

            title2="This is an article title and it is a news article"
            author2="John Doe and Jane Doe"
            imageURL2 = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
            link2= '/news'
        />
        </Desktop>
        <Mobile>
            {articles.map(article => (
                <ArticleCard article={article} />
            ))}
        </Mobile>
        <NextSection nextseclink={nextLink} nextsec={next} image="https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg"></NextSection>
        </main>
    );
};

export default News;

const Mobile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (min-width: 768px) {
        display: none;
    }
`;

const Desktop = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;