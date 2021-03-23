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
    margin: 0;
    padding: 0;
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
        text-align: left;
        padding-left: 132px;
        padding-right: .5rem;
    }

    &.right{
        width: 400px;
        margin-bottom: 19px;
        align-self: flex-end;
        text-align: right;
        padding-right: 132px;
    }
`;