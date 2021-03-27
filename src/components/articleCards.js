import React from 'react';
import styled from 'styled-components';
import ArticleCard from './article-card'

const Articles = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0rem 5rem 1rem 5rem;
    margin: 2rem 0rem 2rem 0rem;
    background-color: rgba(255, 255, 255, 0.75);
`;

const ArticleCards = ({article1, article2, article3}) => (
    <Articles>
        <ArticleCard
            article={article1}
        />
        <ArticleCard
            article={article2}
        />
        <ArticleCard
            article={article3}
        />
    </Articles>
);

export default ArticleCards;