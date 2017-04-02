import styled from 'styled-components';

import {
    PROFILE_NOW
} from 'containers/HomePage/constants';

const H1 = styled.div`
  background-color: ${props => (props.current_profile === PROFILE_NOW)? '#494949' : '#3f5a84'};
  color: white;

  padding-left: 10px;
  font-weight: bold;
`;

export default H1;
