import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row-reverse;
    margin: 2rem 0rem 2rem 0rem;
`

const Body = styled.a`
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: auto;

    :hover{
        background: rgba(255, 255, 255, 0.75);
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    margin-left: 4vw;
    font-size: 24px;
    color: #000000;

    @media only screen and (max-width: 750px){
        font-size: 10px;
    }
`

const NextText = styled.text`
    font-family: Prata;
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    text-align: right;
    text-transform: uppercase;
`

const Begin = styled.text`
    font-family: Khula;
    font-style: normal;
    font-weight: normal;
`

const Img = styled.div`
    background: white;
    margin: 2.188rem 3rem 2.188rem 3rem;

    @media only screen and (max-width: 750px){
        margin: 1rem;
    }
`

const Photo = styled.img`
    width: 18.938rem;
    height: 12.528rem;

    @media only screen and (max-width: 750px){
        width: 8rem;
        height: auto;
    }
`


const NextSection = ( {nextseclink, nextsec, image} ) => ( //add image prop if needed, currently calling from file
    <Wrapper>
        <Body href={nextseclink}>
            <TextBox>
                <NextText>Next Section: {nextsec}</NextText>
                <Begin>Begin Reading</Begin>
            </TextBox>
            <Img>
                <Photo src={image} />
            </Img>
        </Body>
    </Wrapper>
);

export default NextSection;