import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0 20px 0;
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 64px;
    background-color: #FDC089;
    padding: 10px 20px 0 140px;
`;

const SectionTitle = ({ title }) => {
    return (
      <Box> 
        <Title> {title} </Title>
      </Box>
    );
  };

export default SectionTitle