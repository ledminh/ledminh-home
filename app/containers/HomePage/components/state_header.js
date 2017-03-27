import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    position: absolute;
    left: 0px;
    padding: 10px 40px 10px 10px;
    background-color: #676868;
    color: white;
    font-weight: bold;
    font-size: 20px;

    border-radius: 0px 15px 15px 0px;

    display: block;
    @media screen and (max-width: 700px) {
      display: none;
    }
`;

const StateHeader = (props) => (
  <Style>
      NOW
  </Style>
);

export default StateHeader;
