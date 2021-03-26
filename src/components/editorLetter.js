import React from 'react';
import styled from 'styled-components';

const Letter = () => (
    <Wrapper>
        <Row>
            <StyledL>L</StyledL>
            <Title>ETTER FROM THE EDITOR</Title>
        </Row>
        <Text>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et neque ex. Vestibulum vitae lorem at dui pellentesque aliquam. Aenean mi massa, blandit eu faucibus in, dapibus in nisi. Vivamus consequat, tortor ac molestie dignissim, nunc purus consequat sem, in tincidunt enim purus eu massa. In hac habitasse platea dictumst. Duis sit amet erat vel dui semper cursus. Quisque vitae vulputate lacus. Nam risus risus, hendrerit in ullamcorper sed, viverra eu arcu. Ut euismod, risus non consectetur ultrices, ante ipsum elementum augue, sit amet commodo orci quam tempus felis. Sed et lacus id turpis venenatis vehicula. Nullam sed eros id diam suscipit tincidunt sed quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at velit in massa ultricies ultrices.</p>
            <p>Nam scelerisque vel sem et vestibulum. Praesent et suscipit nisi. Maecenas tincidunt lectus non accumsan vehicula. In rutrum risus eget libero laoreet, id sollicitudin mi accumsan. Phasellus a ligula finibus, molestie urna a, porta ligula. Cras hendrerit risus ut posuere congue. Ut tincidunt, felis ut rhoncus dignissim, dolor tellus mollis odio, nec euismod tellus tortor sit amet diam. Curabitur in eleifend ante.</p>
            <p>Nullam cursus vel tellus ut sodales. Cras quis euismod sem. In rhoncus elit fringilla, dapibus mauris et, tempor ex. Nulla metus dui, mattis sit amet dictum sit amet, mattis in lectus. In blandit molestie molestie. Quisque tempor laoreet sollicitudin. Aenean tempor vulputate arcu. Nunc commodo a mi ut elementum. Quisque quis metus nisi. Vivamus eleifend turpis ac molestie scelerisque. Suspendisse vel nisl tempor, semper elit ac, maximus quam. Proin et volutpat tellus.</p>
        </Text>
        <Signature><div className='name'>SARAH BRAKA</div><div className='title'>Editor in Chief</div></Signature>
        <Signature><div className='name'>ELIZABETH KARPEN</div><div className='title'>Managing Editor</div></Signature>
    </Wrapper>
);

export default Letter;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 2rem 0rem 2rem;
    padding: 2rem 2rem 0rem 2rem;
`;

const Title = styled.div`
    font-family: Prata;
    font-size: 2.25rem;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: -1rem;
`;

const StyledL = styled.div`
    font-family: Playfair Display;
    font-size: 6rem;
    font-style: italic;
    font-weight: 700;
    color: #FDC089;
    margin-top: -1rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Text = styled.div`
    p{
        font-family: Khula;
        font-size: 1.125rem;
    }
`;

const Signature = styled.div`
    .name {
        font-family: Prata;
        font-size: 1.625rem;
    }

    .title {
        font-family: Khula;
        font-size:  1.125rem;
    }

    margin: 1rem 0rem 1rem 0rem;
`;