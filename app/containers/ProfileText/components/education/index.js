import React from 'react';
import styled from 'styled-components';

import H1 from 'containers/ProfileText/h1';

import {
    SECTION_EDUCATION,
    PROFILE_NOW
} from 'containers/HomePage/constants';

import {about_me} from 'data';

import {renderEducation} from './utils';


const hidden = `
  display: none;
`;


const show = `
  display: block;
`;

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_EDUCATION)? show : hidden}
`;

const Education = ({current_profile, current_section}) => (
  <Style current_section={current_section}>
      <H1 background={(current_profile === PROFILE_NOW)? '#494949' : '#3f5a84'}>EDUCATION</H1>
      {renderEducation(about_me[current_profile].education)}
  </Style>
);

export default Education;
