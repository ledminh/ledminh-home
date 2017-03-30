import React from 'react';
import styled from 'styled-components';

import {
  PROFILE_NOW
} from 'containers/HomePage/constants';

const Wrapper = styled.div`
    border: 2px solid ${(props) => (props.current_profile === PROFILE_NOW) ? `#afafaf` : `#9dbdf2` };
    margin-top: 10px;
    padding: 5px;
    background-color: white;

    @media screen and (max-width: 700px){
      text-align: center;
      margin: 10px;
      border-radius: 5px;
    }
`;

Wrapper.propTypes = {
  current_profile: React.PropTypes.string
}

export default Wrapper;
