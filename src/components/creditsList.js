import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import Article1 from '../components/article1';

const width = window.innerWidth;

const Wrapper = styled.div`
    padding: 0;
    margin: 0;    
`;

const Text = styled.div`
    padding: 0 5rem 0rem 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: Khula;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    h2 {
        font-family: Prata;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 750px) {
        padding: 0 2rem 0rem 2rem;
    }
`;

const Column = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    justify-content: flex-start;
    margin: 3rem;
`;

const SubDiv = styled.div`
    padding-bottom: 6rem;
    @media only screen and (max-width: 750px) {
        text-align: center;
        padding-bottom: 3rem;
    }
`;







const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;
const TopLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* text-align: center; */
    @media only screen and (max-width: 750px) {
        width:100vw;
        padding: 0 8rem 0 8rem;
    }
`;
const Letter = styled.div`
    font-family: Playfair Display;
    font-size: 6rem;
    font-style: italic;
    font-weight: 700;
    color: #D0867C;
    text-transform: uppercase;
`;
const LetterMobile = styled.text`
    font-family: Playfair Display;
    font-size: 6rem;
    font-style: italic;
    font-weight: 700;
    color: #D0867C;
    text-transform: uppercase;
    transform: translate(0 3rem -50px 0); //neg margins
    margin: 0rem -1.7rem -2rem 0;
`;
const Text1 = styled.div`
    font-family: Prata;
    font-size: 2.25rem;
    text-transform: uppercase;
    margin: 3.5rem 0rem auto -1.8rem;
    @media only screen and (max-width: 750px) {
        text-align: center;
    }
`;
const Text2 = styled.div`
    font-family: Prata;
    font-size: 2.25rem;
    text-transform: uppercase;
    margin: -1rem 0rem 3rem -.5rem;
`;




const CreditsList = () => {
    // const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        // window.addEventListener("resize", () => setWidth(window.innerWidth));
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'auto'
        });
    });

    if (width > 750){
        return (
        <>
            <Wrapper>
                <Title>
                    <TopLine><Letter>T</Letter><Text1>he Columbia Daily Spectator staff who</Text1></TopLine>
                    <Text2>made this issue possible</Text2>
                </Title>
                <Text>
                    <Column>
                        <SubDiv>
                            <h2>Design and Development</h2>
                            <p>Erin McNulty, Head of Engineering</p>
                            <p>Cindy Espinosa, Head of Product</p>
                            <p>Ray Banke, Deputy Illustrations Editor</p>
                        </SubDiv>

                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Carlos Ochoa, Staff Illustrator</p>
                        </SubDiv>
                    </Column>
                    <Column>
                        <SubDiv>
                            <div>
                                <h2>The Eye</h2>
                                <p>Claudia Gohn, Managing Editor of The Eye</p>
                                <p>Cole Cahill, Lead Story Editor</p>
                                <p>Teresa Lawlor, View from Here Editor</p>
                                <p>Briani Netzahuatl, Features Editor</p>
                                <p>Derek Ng</p>
                                <p>Eve Washington</p>
                                <p>Cassie Wu</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Illustrations</h2>
                                <p>Brenda Huang, Illustrations Editor</p>
                                <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                                <p>Ashley Jiao, Deputy Illustrations Editor</p>
                                <p>Noelle Hunter</p>
                                <p>Julian Michaud</p>
                                <p>Sadia Sharif</p>
                                <p>Nicole Yang</p>
                            </div>
                        </SubDiv>
                    </Column>
                    <Column>
                        <SubDiv>
                            <div>
                                <h2>Copy</h2>
                                <p>Emma Bradbury, Head Copy Editor</p>
                                <p>Fritzie Schwentker, Deputy Copy Editor</p>
                                <p>Mabry Griffin, Deputy Copy Editor</p>
                                <p>Kaylene Chong, Deputy Copy Editor</p>
                                <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                                <p>Olivia Vella</p>
                                <p>Carolyn Wang</p>
                                <p>Harry Shi</p>
                                <p>Jacob Kang</p>
                                <p>Robyn Fohouo</p>
                                <p>Katherine Carraway</p>
                                <p>Rachel Borshchenko</p>
                                <p>Jonah Pitkowsky</p>
                                <p>Natalie Park</p>
                                <p>Adeline Hu</p>
                                <p>Maria Levit</p>
                                <p>Eden Teferi</p>
                                <p>Willa Nagy</p>
                                <p>Alia Derriey</p>
                                <p>Sam Barnett</p>
                                <p>Kathryn Cherven</p>
                                <p>Leif Wood</p>
                                <p>Renuka Balakrishnan</p>
                            </div>
                        </SubDiv>
                    </Column>
                </Text>
            </Wrapper>
        </>
        )
    }
    if (width < 750){
        return (
            <>
                <Wrapper>
                    <Title>
                        <TopLine><Text1><LetterMobile>T</LetterMobile>he Columbia Daily Spectator staff who made this issue possible</Text1></TopLine>
                        <Text2></Text2>
                    </Title>
                    <Text>
                        <Column>
                            <SubDiv>
                                <h2>Design and Development</h2>
                                <p>Erin McNulty, Head of Engineering</p>
                                <p>Cindy Espinosa, Head of Product</p>
                                <p>Ray Banke, Deputy Illustrations Editor</p>
                            </SubDiv>
                            <SubDiv>
                                <h2>Lead Illustration By</h2>
                                <p>Carlos Ochoa, Staff Illustrator</p>
                            </SubDiv>
                            <SubDiv>
                                <div>
                                    <h2>The Eye</h2>
                                    <p>Claudia Gohn, Managing Editor of The Eye</p>
                                    <p>Cole Cahill, Lead Story Editor</p>
                                    <p>Teresa Lawlor, View from Here Editor</p>
                                    <p>Briani Netzahuatl, Features Editor</p>
                                    <p>Derek Ng</p>
                                    <p>Eve Washington</p>
                                    <p>Cassie Wu</p>
                                </div>
                            </SubDiv>
                            <SubDiv>
                                <div>
                                    <h2>Illustrations</h2>
                                    <p>Brenda Huang, Illustrations Editor</p>
                                    <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                                    <p>Ashley Jiao, Deputy Illustrations Editor</p>
                                    <p>Noelle Hunter</p>
                                    <p>Julian Michaud</p>
                                    <p>Sadia Sharif</p>
                                    <p>Nicole Yang</p>
                                </div>
                            </SubDiv>
                            <SubDiv>
                                <div>
                                    <h2>Copy</h2>
                                    <p>Emma Bradbury, Head Copy Editor</p>
                                    <p>Fritzie Schwentker, Deputy Copy Editor</p>
                                    <p>Mabry Griffin, Deputy Copy Editor</p>
                                    <p>Kaylene Chong, Deputy Copy Editor</p>
                                    <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                                    <p>Olivia Vella</p>
                                    <p>Carolyn Wang</p>
                                    <p>Harry Shi</p>
                                    <p>Jacob Kang</p>
                                    <p>Robyn Fohouo</p>
                                    <p>Katherine Carraway</p>
                                    <p>Rachel Borshchenko</p>
                                    <p>Jonah Pitkowsky</p>
                                    <p>Natalie Park</p>
                                    <p>Adeline Hu</p>
                                    <p>Maria Levit</p>
                                    <p>Eden Teferi</p>
                                    <p>Willa Nagy</p>
                                    <p>Alia Derriey</p>
                                    <p>Sam Barnett</p>
                                    <p>Kathryn Cherven</p>
                                    <p>Leif Wood</p>
                                    <p>Renuka Balakrishnan</p>
                                </div>
                            </SubDiv>
                        </Column>
                    </Text>
                </Wrapper>
            </>
        )
    }
};


export default CreditsList;