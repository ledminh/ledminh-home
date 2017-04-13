import React from 'react';
import styled from 'styled-components';

import {renderParagraphs} from 'utils/render-paragraphs';

import {
    SECTION_SUMMARY
} from 'containers/HomePage/constants';

const hidden = `
  display: none;
`;


const show = `
  display: block;
`;

import {about_me} from 'data';

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_SUMMARY)? show : hidden}
`;

const Summary = ({current_profile, current_section}) => (
    <Style current_section={current_section}>
        {renderParagraphs(about_me[current_profile].summary)}
    </Style>
);

export default Summary;
