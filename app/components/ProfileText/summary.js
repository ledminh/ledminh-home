import React from 'react';
import styled from 'styled-components';

import {
    SECTION_SUMMARY
} from 'containers/HomePage/constants';

const hidden = `
  display: none;
`;


const show = `
  display: block;
`;

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_SUMMARY)? show : hidden}
`;

const Summary = ({current_profile, current_section}) => (
    <Style current_profile={current_profile}>
    </Style>
);

export default Summary;
