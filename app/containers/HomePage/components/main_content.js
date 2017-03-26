import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    border-radius: 15px;
    padding: 10px;
    background-color: white;

    margin-left: 210px;
    margin-top: 0px;
    @media screen and (max-width: 700px) {
      margin-top: 35px;
      margin-left: 0px;
    }
`;


const MainContent = ({children}) => (
    <Frame>
      {children}
    </Frame>
);

export default MainContent;
