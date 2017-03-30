import styled from 'styled-components';

import {
  PROFILE_NOW
} from '../constants';

const MainFrame = styled.div`
    position: relative;
    background-color: ${props => (props.current_profile === PROFILE_NOW)? `#c4c4c4` : `#95aee2`};
    width: 90%;
    min-width: 500px;
    max-width: 1200px;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 100px;
    padding: 10px;

    border-radius: 10px;
    z-index: 0;
`;

export default MainFrame;
