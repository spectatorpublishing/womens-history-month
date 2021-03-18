import React from 'react';
import styled from 'styled-components';
import image from './primaryImage.png'

const Body = styled.a`
    position: absolute;
    left: 679px;
    top: 1593px;
    
    width: 761px;
    height: 270px;
    border: none;
    background: rgba(255, 255, 255, 0.75);
    display: flex;
    text-decoration: none;

    :hover{
        background: #FCF7EC;
    }
`

const TextBox = styled.div`
    width: 319px;
    height: 270px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
`

const NextText = styled.text`
    font-family: Prata;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: right;
    text-transform: uppercase;

    color: #000000;
`

const Begin = styled.text`
    font-family: Khula;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 39px;
`

const Img = styled.div`
    position: absolute;
    left: 345px;
    top: 36px;
    
    width: 303px;
    height: 200.44px;
    background: white;
`

const NextSection = ( {nextseclink, nextsec} ) => ( //add image prop if needed, currently calling from file
    <Body href={nextseclink}>
        <TextBox>
            <NextText>Next Section: {nextsec}</NextText>
            <Begin>Begin Reading</Begin>
        </TextBox>
        <Img>
            <img src={image} />
        </Img>
    </Body>
);

export default NextSection;