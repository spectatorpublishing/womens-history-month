import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import {illustrations} from '../data/illustrations';

const Article1 = ({article1, article2}) => {
    return(
        <ArticleSection>
        <Article
            article={article1}
            side = 'left'
        />
        <Article
            article={article2}
            side = 'right'
        />
        </ArticleSection>
    );
};

export default Article1;

const Article = ({article, side}) => {
    return (
        <>
        {article ?
        <Wrapper href={article.article_link} className={side}>
            {(side == "left") ? null : <Image illustration={illustrations[Math.floor(Math.random() * illustrations.length)]}><img src={article.image_url}/></Image>}
            <div className="textbox">
                <Title><Text>{article.article_title}</Text></Title>
                <Author>By {article.article_authors}</Author>
            </div>
            {(side == "right") ? null : <Image illustration={illustrations[Math.floor(Math.random() * illustrations.length)]}><img src={article.image_url}/></Image>}
        </Wrapper> : null}
        </>
    );
};

const ArticleSection = styled.div`
    margin: 0rem 8rem 0rem 8rem;
    @media only screen and (max-width: 1200px) {
        margin: 0rem 4rem 0rem 4rem;
    }
    @media only screen and (max-width: 1000px) {
        margin: 0rem 2rem 0rem 2rem;
    }

`;

const Wrapper = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin: 1rem 0rem 1rem 0rem;

    img {
        opacity: 0;
        display: block;
        object-fit: cover;
        margin: auto 0rem auto -13rem;
        width: 28rem;
        height: 22rem;
        //content: url("https://womenshistorymonth2021.s3.amazonaws.com/File_001(2).png");    
    }

    .textbox {
        margin: auto 0rem auto auto;
        width: 80vw;
        padding: 0.2rem 1rem 1.2rem 1rem;
    }

    :hover{
        img {
            opacity: 1;
        }
        .textbox {
            background: rgba( 255, 255, 255, 0.75);
        }
    }

    &.right {
        img {
            margin: auto -13rem auto auto;
        }

        .textbox {
            margin: auto 0rem auto auto;
            padding: 0.2rem 1rem 1.2rem 1rem;
            text-align: right;
        }
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
`;

const Text = styled.div`
    line-height: 3rem;
    font-family: Prata;
    font-size: 2.25rem;
    text-transform: uppercase;
    margin: auto 1rem auto 1rem;

    ::first-letter{
        font-family: Playfair Display;
        font-size: 6rem;
        font-style: italic;
        font-weight: 700;
        color: #D0867C;
        text-transform: uppercase;
        margin: auto -1rem auto auto;
        vertical-align: sub;
    }
`;

const Author = styled.div`
    font-family: Khula;
    font-size: 1.25rem;
    margin: 0rem 1rem 0rem 3rem;
`;
const Image = styled.div`
    margin: auto 0rem auto 0rem;
    z-index: -1;
    background-image: url("${props => props.illustration}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;