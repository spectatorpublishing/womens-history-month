import React from 'react';
import styled from 'styled-components';
import image from './images/primaryImage.png'

const Wrapper = styled.div`
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row-reverse;
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

    @media only screen and (max-device-width: 750px){
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

    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 2.188rem;
    margin-bottom: 2.188rem;

    @media only screen and (max-device-width: 750px){
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

const Photo = styled.img`
    width: 18.938rem;
    height: 12.528rem;

    @media only screen and (max-device-width: 750px){
        width: 8rem;
        height: auto;
    }
`


const NextSection = ( {nextseclink, nextsec} ) => ( //add image prop if needed, currently calling from file
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