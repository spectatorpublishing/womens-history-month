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
    @media only screen and (max-width: 750px) {
        margin: 0 10rem 0 10rem;
    }
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
    margin: 0 -1.7rem 0 0;
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
    text-align: center;
    margin: -1rem 0rem 3rem -.5rem;
`;
const ClipArt = styled.img`
    height: 20rem;
    width: auto;
`




var titletext1 = "";
var titletext2 = "";
if (width > 950) { 
    titletext1 = "he Columbia Daily Spectator staff who";
    titletext2 = "made this issue possible";
}
else if (width<=950 && width>810) {
    titletext1 = "he Columbia Daily Spectator staff";
    titletext2 = "who made this issue possible";
}
else if (width<=810 && width>750) {
    titletext1 = "he Columbia Daily Spectator";
    titletext2 = "staff who made this issue possible";
    console.log("ye");
}

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
                    <TopLine><Letter>T</Letter><Text1>{titletext1}</Text1></TopLine>
                    <Text2>{titletext2}</Text2>
                </Title>
                <Text>
                    <Column>
                        <SubDiv>
                            <h2>Design and Development</h2>
                            <p>Caroline Su, Product Designer</p>
                            <p>Laura Castro, Deputy Engineering Manager</p>
                            <p>Raymond Banke, Illustrations Deputy</p>
                            <p>Mirah Shi, Product Manager</p>
                            <p>Francesca Cavuoti</p>
                            <p>Yu-Chen Huang</p>
                            <p>Matthew Werneken</p>
                        </SubDiv>
                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Graphics</h2>
                                <p>Jessica Li, Graphics Editor</p>
                                <p>Andrew Park</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Illustrations</h2>
                                <p>Brenda Huang, Illustrations Editor</p>
                                <p>Liza Evseeva, Deputy Illustrations Editor</p>
                                <p>Ashley Jiao, Deputy Illustrations Editor</p>
                                <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                                <p>Tina Wang</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Photo</h2>
                                <p>Beatrice Shlansky, Photo Editor</p>
                                <p>Millie Felder, Deputy Photo Editor</p>
                                <p>Kate Della Pietra, Deputy Photo Editor</p>
                                <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                                <p>Rommel Nunez</p>
                                <p>Alex Kieu</p>
                                <p>Samantha Camacho</p>
                                <p>Emma Snoddy</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <ClipArt src="https://womenshistorymonth2021.s3.amazonaws.com/File_003(1).png" />
                            </div>
                        </SubDiv>
                    </Column>
                    <Column>
                        <SubDiv>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, Editor in Chief</p>
                            <p>Elizabeth Karpen, Managing Editor</p>
                            <p>Tamarah Wallace, Publisher</p>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>The Eye</h2>
                                <p>Jade Justice, Features Editor</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <ClipArt src="https://womenshistorymonth2021.s3.amazonaws.com/File_001(1).png" />
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>News</h2>
                                <p>Dia Gill, News Editor</p>
                                <p>Sofia Kwon, News Editor</p>
                                <p>Abby Melbourne, Deputy News Editor</p>
                                <p>Maya Lemeche</p>
                                <p>Ashley Yung</p>
                                <p>Kathy Fang</p>
                                <p>Irie Sentner</p>
                                <p>Kelly Ann Cosentino</p>
                                <p>Claire Hunt</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Arts and Entertainment</h2>
                                <p>Noah Sheidlower, A&E Editor</p>
                                <p>Bella Druckman, Deputy A&E Editor</p>
                                <p>Katie Levine, Deputy A&E Editor</p>
                                <p>Olivia Doyle, Deputy A&E Editor</p>
                                <p>Esterah Brown</p>
                                <p>Irene Madrigal</p>
                                <p>Sophie Craig</p>
                                <p>Maryam Rahaman</p>
                                <p>Julia Tong</p>
                                <p>Noah Bullwinkle</p>
                                <p>Victoria Irizarry</p>
                            </div>
                        </SubDiv>
                    </Column>
                    <Column>
                        <SubDiv>
                            <div>
                                <h2>Sports</h2>
                                <p>Mackenzie George, Sports Editor</p>
                                <p>Ence Morse, Sports Editor</p>
                                <p>Matt Kim, Deputy Sports Editor</p>
                                <p>Miles Schachner, Deputy Sports Editor</p>
                                <p>Wick Hallos</p>
                                <p>Jorge Hernandez</p>
                                <p>Ashleigh Lackey</p>
                                <p>Rebecca Wachen</p>
                                <p>Bernard Wang</p>
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
                                <p>Joyce Liu</p>
                                <p>Abby Sim</p>
                                <p>Adam Burns</p>
                                <p>Madison Guzy</p>
                                <p>Natalie Goldberg</p>
                                <p>Michaela Fleischer</p>
                                <p>Noyna Roy</p>
                                <p>Zoe Yin</p>
                                <p>Haley Zehrung</p>
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
                    </Title>
                    <Text>
                    <Column>
                        <SubDiv>
                            <h2>Design and Development</h2>
                            <p>Caroline Su, Product Designer</p>
                            <p>Laura Castro, Deputy Engineering Manager</p>
                            <p>Raymond Banke, Illustrations Deputy</p>
                            <p>Mirah Shi, Product Manager</p>
                            <p>Francesca Cavuoti</p>
                            <p>Yu-Chen Huang</p>
                            <p>Matthew Werneken</p>
                        </SubDiv>
                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Graphics</h2>
                                <p>Jessica Li, Graphics Editor</p>
                                <p>Andrew Park</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Illustrations</h2>
                                <p>Brenda Huang, Illustrations Editor</p>
                                <p>Liza Evseeva, Deputy Illustrations Editor</p>
                                <p>Ashley Jiao, Deputy Illustrations Editor</p>
                                <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                                <p>Tina Wang</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Photo</h2>
                                <p>Beatrice Shlansky, Photo Editor</p>
                                <p>Millie Felder, Deputy Photo Editor</p>
                                <p>Kate Della Pietra, Deputy Photo Editor</p>
                                <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                                <p>Rommel Nunez</p>
                                <p>Alex Kieu</p>
                                <p>Samantha Camacho</p>
                                <p>Emma Snoddy</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, Editor in Chief</p>
                            <p>Elizabeth Karpen, Managing Editor</p>
                            <p>Tamarah Wallace, Publisher</p>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>The Eye</h2>
                                <p>Jade Justice, Features Editor</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <ClipArt src="https://womenshistorymonth2021.s3.amazonaws.com/File_001(1).png" />
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>News</h2>
                                <p>Dia Gill, News Editor</p>
                                <p>Sofia Kwon, News Editor</p>
                                <p>Abby Melbourne, Deputy News Editor</p>
                                <p>Maya Lemeche</p>
                                <p>Ashley Yung</p>
                                <p>Kathy Fang</p>
                                <p>Irie Sentner</p>
                                <p>Kelly Ann Cosentino</p>
                                <p>Claire Hunt</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Arts and Entertainment</h2>
                                <p>Noah Sheidlower, A&E Editor</p>
                                <p>Bella Druckman, Deputy A&E Editor</p>
                                <p>Katie Levine, Deputy A&E Editor</p>
                                <p>Olivia Doyle, Deputy A&E Editor</p>
                                <p>Esterah Brown</p>
                                <p>Irene Madrigal</p>
                                <p>Sophie Craig</p>
                                <p>Maryam Rahaman</p>
                                <p>Julia Tong</p>
                                <p>Noah Bullwinkle</p>
                                <p>Victoria Irizarry</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <h2>Sports</h2>
                                <p>Mackenzie George, Sports Editor</p>
                                <p>Ence Morse, Sports Editor</p>
                                <p>Matt Kim, Deputy Sports Editor</p>
                                <p>Miles Schachner, Deputy Sports Editor</p>
                                <p>Wick Hallos</p>
                                <p>Jorge Hernandez</p>
                                <p>Ashleigh Lackey</p>
                                <p>Rebecca Wachen</p>
                                <p>Bernard Wang</p>
                            </div>
                        </SubDiv>
                        <SubDiv>
                            <div>
                                <ClipArt src="https://womenshistorymonth2021.s3.amazonaws.com/File_003(1).png" />
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
                                <p>Joyce Liu</p>
                                <p>Abby Sim</p>
                                <p>Adam Burns</p>
                                <p>Madison Guzy</p>
                                <p>Natalie Goldberg</p>
                                <p>Michaela Fleischer</p>
                                <p>Noyna Roy</p>
                                <p>Zoe Yin</p>
                                <p>Haley Zehrung</p>
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