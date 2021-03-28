import React from 'react';
import styled from 'styled-components';

const Banner = () => (
    <Wrapper>
        <Text>
            <Row className='left'>40 years</Row>
            <Row className='left'>of</Row>
        </Text>
        <Text>
            <Row className='right'>women at</Row>
            <Row className='right'>Columbia</Row>
        </Text>
    </Wrapper>
);

export default Banner;

const Wrapper = styled.div`
    width: 100vw;
    background-image: url("https://womenshistorymonth2021.s3.amazonaws.com/New+3_5.PNG");
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    padding-top: 8%;
    top: 0;
`;

const Text = styled.div`
    font-family: Prata;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 100px;
    text-transform: uppercase;
    color: #000000;
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

const Row = styled.div`
    margin-bottom: 11px; 
    height: 88px;
    background: #FDC089;
    width: fit-content;

    &.left{
        width: 350px;
        text-align: right;
        padding-left: 100px;
        padding-right: 1rem;
    }

    &.right{
        width: 400px;
        margin-bottom: 19px;
        align-self: flex-end;
        text-align: right;
        padding-right: 100px;
    }
`;