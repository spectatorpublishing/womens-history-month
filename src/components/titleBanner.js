import React from 'react';
import styled from 'styled-components';

const Banner = () => (
    <Wrapper>
        <Section className='left'>
            <Row className='left'><Text className='left'>40 years</Text></Row>
            <Row className='left'><Text className='left'>of</Text></Row>
        </Section>
        <Section className='right'>
            <Row className='right'><Text className='right'>women at</Text></Row>
            <Row className='right'><Text className='right'>Columbia</Text></Row>
        </Section>
    </Wrapper>
);

export default Banner;

const Wrapper = styled.div`
    height: 25rem;
    background-image: url("https://womenshistorymonth2021.s3.amazonaws.com/New+3_5.PNG");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 5rem 0rem 5rem 0rem;
    top: 0;

    @media only screen and (max-width: 768px) {
        height: 40rem;
        padding: 3rem 0rem 5rem 0rem;
        background-image: url("https://womenshistorymonth2021.s3.amazonaws.com/3_5.png");
    }

    @media only screen and (max-width: 430px) {
        height: 20rem;
        padding: 1.3rem 0rem 2rem 0rem;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {

        &.right{
            margin-top: 22rem;
        }

        &.left{
            margin-bottom: 10rem;
        }
    }

    @media only screen and (max-width: 570px) {

        &.right{
            margin-top: 10rem;
            margin-bottom: 5rem;
        }

        &.left{
            margin-bottom: 10rem;
            margin-top: 5rem;
        }
    }

    @media only screen and (max-width: 430px) {

        &.right{
            margin-top: 10rem;
            margin-bottom: 0rem;
        }

        &.left{
            margin-bottom: 0rem;
            margin-top: 0rem;
        }
    }
`;

const Text = styled.div`
    font-family: Prata;
    font-size: 64px;
    text-transform: uppercase;
    color: #000000;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    &.left{
        text-align: right;
        margin-left: auto;
        margin-right: 1.5rem;
    }

    &.right{
        align-self: flex-end;
        text-align: left;
        margin-right: auto;
        margin-left: 1.5rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media only screen and (max-width: 430px) {
        font-size: 24px;
        margin-top: 0.2rem;
        margin-bottom: 0rem;

        &.left{
            margin-right: 1rem;
        }
    
        &.right{
            margin-left: 1rem;
        }
    }
`;

const Row = styled.div`
    margin-bottom: 11px; 
    background: #FDC089;
    width: 30rem;

    &.left{
        margin-right: auto;
    }

    &.right{
        margin-left: auto;
    }

    @media only screen and (max-width: 768px) {
        width: 20rem;
    }

    @media only screen and (max-width: 430px) {
        width: 12rem;
        margin-bottom: 5px;
    }
`;