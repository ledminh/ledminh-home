import React from 'react';
import styled from 'styled-components';

import StateHeader from './state_header';

const Frame = styled.div`
    position: relative;
    border-radius: 15px;
    padding: 10px;
    background-color: white;

    margin-left: 210px;
    margin-top: 0px;

    min-height: 400px;

    @media screen and (max-width: 700px) {
      margin-top: 220px;
      margin-left: 0px;

      min-height: auto;
    }
`;

const Content = styled.div`
    margin-top: 70px;
    @media screen and (max-width: 700px) {
      margin-top: 0px;
    }
`;

const MainContent = ({children, current_profile}) => (
    <Frame>
      <StateHeader current_profile={current_profile}/>
      <Content>
          {children}
      </Content>
    </Frame>
);

export default MainContent;
