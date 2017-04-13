import styled from 'styled-components';

import {
  PROJECT_BOX__NORMAL
} from 'containers/Projects/constants';

const Title =  styled.div`
    color: ${(props) => (props.css_state === PROJECT_BOX__NORMAL)? `white` : `#27264f`};
    text-shadow: ${(props) => (props.css_state === PROJECT_BOX__NORMAL)? `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black` : `none`};
    background-color: white;
    font-size: 40px;
    font-weight: ${(props) => (props.css_state === PROJECT_BOX__NORMAL)? `normal` : `bold`};
    text-align: center;
    border-bottom: 5px double gray;
`;

export default Title;
