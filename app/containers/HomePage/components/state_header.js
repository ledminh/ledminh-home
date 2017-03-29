import React from 'react';
import styled from 'styled-components';

import {
  PROFILE_NOW
} from '../constants';

import {state_header} from '../messages';

const now = `
  left: 0px;
  background-color: #305bb5;
  padding: 10px 40px 10px 10px;
  border-radius: 0px 15px 15px 0px;
`;


const then = `
  right: 0px;
  background-color: #6d6d6d;
  padding: 10px 10px 10px 40px;
  border-radius: 15px 0px 0px 15px;
`;

const Style = styled.div`
    position: absolute;

    ${props => (props.current_profile === PROFILE_NOW)? now : then}

    color: white;
    font-weight: bold;
    font-size: 20px;
    display: block;

    @media screen and (max-width: 700px) {
      display: none;
    }
`;

const StateHeader = ({current_profile}) => (
  <Style current_profile={current_profile}>
      {(current_profile === PROFILE_NOW)? state_header.now : state_header.then}
  </Style>
);

export default StateHeader;
