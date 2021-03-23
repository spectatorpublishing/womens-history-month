import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;    
    font-weight: 400;

    @media only screen and (max-width: 600px) {
        width: 18rem;
    }
    
    @media only screen and (min-width: 601px) {
        height: 22.5rem;
        width: 22.5rem;
        margin: 1rem;
    }

    a {
        text-decoration: none;
        color: black;
    }

    cursor: pointer;
    :hover{
        background-color: rgba(255, 255, 255, 0.75);
        img{
            opacity: 30%;
        }
    }
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 1.125rem;
    margin: 0 1.25rem 0 1.25rem;
`;

const Name = styled.div`
    font-family: "Khula";
    font-weight: 400;
    font-size: 1.125rem;
    margin: 0 1.25rem 0 1.25rem;
`;

const Image = styled.div`
    background-color: #FDC089;
    margin: 1.25rem;
    width: 20rem;
    height: 12.5rem;
    overflow: hidden;

    img {
        max-width: 100%;
        margin: auto;
    }

    @media only screen and (max-width: 600px) {
        width: 16rem;
        height: 10rem;
    }

`;

const ArticleCard = ({ title, name, imageURL, buttonLink }) => {
    return (
      <Card> 
        <a href={buttonLink}>
                <Image> <img alt='article image' src={imageURL} /> </Image>
            <Title>{title}</Title>
            <Name>{name}</Name>
        </a>
      </Card>
    );
  };

export default ArticleCard;