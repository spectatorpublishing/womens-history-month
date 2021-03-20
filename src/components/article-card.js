import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    height: 360px;
    width: 360px;
    font-weight: 400;

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
    font-size: 18px;
    margin: 0 20px 0 20px;
`;

const Name = styled.div`
    font-family: "Khula";
    font-weight: 400;
    font-size: 16px;
    margin: 10px 20px 0 20px;
`;

const Image = styled.div`
    background-color: #FDC089;
    margin: 20px;
    width: 320px;
    height: 200px;
    overflow: hidden;

    img {
        max-width: 100%;
        margin: auto;
    }

`;
/*
const Tint = styled.div`
    :hover { 
        opacity: .5; -webkit-filter: grayscale(100%) sepia(100%); 
    }
`;

const Orange = styled.div`
    position: absolute:
    height: 360px;
    width: 360px;
    border: 20px 20px 120px 20px solid transparent;
    :hover { 
        background-color: orange; 
    }
`;*/

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