import styled from 'styled-components';
import React from 'react';

import {
  PROJECT_BOX__NORMAL
} from 'containers/Projects/constants';

const Style = styled.div`
  background-color: ${(props) => (props.css_state === PROJECT_BOX__NORMAL)? `#d3d3d3` : `#244375`};
  color: ${(props) => (props.css_state === PROJECT_BOX__NORMAL)? `black` : `white`};
  padding : 5px 0px 5px 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Category = ({children, css_state}) => (
    <Style css_state={css_state}>
        {children}
    </Style>
);

export default Category;
