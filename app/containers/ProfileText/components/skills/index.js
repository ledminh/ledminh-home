import React from 'react';
import styled from 'styled-components';

import H1 from 'containers/ProfileText/h1';
import Subtitle from './subtitle';

import {
    SECTION_SKILLS,
    PROFILE_NOW
} from 'containers/HomePage/constants';

import {about_me} from 'data';

import {renderSkills} from './utils';

const hidden = `
  display: none;
`;

const show = `
  display: block;
`;

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_SKILLS)? show : hidden}
`;

const Skills = ({current_profile, current_section} ) => (
  <Style current_section={current_section}>
      <H1 background={(current_profile === PROFILE_NOW)? '#494949' : '#3f5a84'}>SKILLS</H1>
      <Subtitle>SKILLS</Subtitle>
      {renderSkills(about_me[current_profile].skills)}
  </Style>
);

export default Skills;
