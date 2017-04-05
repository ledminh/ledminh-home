import React from 'react';
import styled from 'styled-components';

import H1 from 'containers/ProfileText/h1';

import {
    SECTION_EXPERIENCE,
    PROFILE_NOW
} from 'containers/HomePage/constants';

import {about_me} from 'data';
import {renderExperiences} from './utils';

const hidden = `
  display: none;
`;


const show = `
  display: block;
`;

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_EXPERIENCE)? show : hidden}
`;

const Experience = ({current_profile, current_section}) => (
  <Style current_section={current_section}>
      <H1 background={(current_profile === PROFILE_NOW)? '#494949' : '#3f5a84'}>EXPERIENCES</H1>
      {renderExperiences(about_me[current_profile].experiences)}
  </Style>
);

export default Experience;
