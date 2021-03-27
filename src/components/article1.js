import React from 'react';
import styled from 'styled-components';
import { device } from '../device';

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
            {(side == "left") ? null : <Image><img src={article.image_url}/></Image>}
            <div className="textbox">
                <Title><Letter>{article.article_title.substring(0,1)}</Letter><Text>{article.article_title.substring(1)}</Text></Title>
                <Author>By {article.article_authors}</Author>
            </div>
            {(side == "right") ? null : <Image><img src={article.image_url}/></Image>}
        </Wrapper> : null}
        </>
    );
};
const ArticleSection = styled.div`
    margin: 0rem 8rem 0rem 8rem;
`;
const Wrapper = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;

    img {
        opacity: 0;
        display: block;
        object-fit: contain;
        margin: auto 0rem auto 0rem;
        width: 28rem;
        height: 22rem;    
    }

    .textbox {
        margin: auto -13rem auto auto;
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
        .textbox {
            margin: auto 0rem auto -13rem;
            padding: 0.2rem 1rem 1.2rem 1rem;
        }
    
        :hover{
            img {
                margin: auto 0rem auto 0rem;
            }
        }
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
`;

const Letter = styled.div`
    font-family: Playfair Display;
    font-size: 6rem;
    font-style: italic;
    font-weight: 700;
    color: #D0867C;
    text-transform: uppercase;
`;

const Text = styled.div`
    font-family: Prata;
    font-size: 2.25rem;
    text-transform: uppercase;
    margin: 3.5rem 0rem auto -1.8rem;
`;

const Author = styled.div`
    font-family: Khula;
    font-size: 1.25rem;
    margin-left: 1rem;
`;
const Image = styled.div`
    width: 28rem;
    height: 22rem;
    z-index: -1;
`;