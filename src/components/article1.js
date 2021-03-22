import React from 'react';
import styled from 'styled-components';
import { device } from '../device';

const Article1 = ({title1, author1, imageURL1, link1, title2, author2, imageURL2, link2}) => {
    return(
        <div>
        <Article
            title={title1}
            author={author1}
            imageURL ={imageURL1}
            link = {link1}
            side = 'left'
        />
        <Article
            title={title2}
            author={author2}
            imageURL ={imageURL2}
            link = {link2}
            side = 'right'
        />
        </div>
    );
};

export default Article1;

const Article = ({side, title, author, imageURL, link}) => {
    if (side == "left"){
        return(
            <Wrapper href={link}>
                <div className="textbox">
                    <Title><Letter>{title.substring(0,1)}</Letter><Text>{title.substring(1)}</Text></Title>
                    <Author>By {author}</Author>
                </div>
                <Image><img src={imageURL}/></Image>
            </Wrapper>
    );
    } else {
        return(
            <Wrapper href={link} className="right">
                <Image><img src={imageURL}/></Image>
                <div className="textbox">
                    <Title><Letter>{title.substring(0,1)}</Letter><Text>{title.substring(1)}</Text></Title>
                    <Author>By {author}</Author>
                </div>
            </Wrapper>
        );
    }
};

const Wrapper = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;

    img {
        display: none;
    }

    .textbox {
        margin: auto 0rem auto auto;
        padding: 0.2rem 1rem 1.2rem 1rem;
    }

    :hover{
        img {
            display: block;
            object-fit: contain;
            margin: auto 0 auto -13rem;
            height: 22rem;
        }
        .textbox {
            background: rgba( 255, 255, 255, 0.75);
        }
    }

    &.right {
        .textbox {
            margin: auto auto auto 0rem;
        }
    
        :hover{
            img {
                margin: auto -13rem auto auto;
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
    width: 33rem;
    height: 22rem;
    z-index: -1;
`;