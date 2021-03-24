import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1.25rem 0 1.25rem 0;
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 4rem;
    background-color: #FDC089;
    padding: 0.625rem 1.25rem 0 8.75rem;

    @media only screen and (max-width: 600px) {
        font-size: 3rem;
        padding: 0.25rem 1.25rem 0 2rem;
    }
`;

const SectionTitle = ({ title }) => {
    return (
      <Box> 
        <Title> {title} </Title>
      </Box>
    );
  };

export default SectionTitle