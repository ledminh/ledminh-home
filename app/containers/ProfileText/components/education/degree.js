import React from 'react';
import styled from 'styled-components';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {makeSelectCurrentProfile} from 'containers/HomePage/selectors';

import {
  PROFILE_NOW
} from 'containers/HomePage/constants';

const Style = styled.div`
    margin-top: 10px;
    margin-left: 40px;
    cursor: ${props => (props.link) ? 'pointer' : 'auto'};

    &:hover {
      background-color: ${props => props.current_profile === PROFILE_NOW ? `#bfbfbf` : `#c3cee0`};
    }
`;


const Degree = ({children, link, current_profile}) => (
  <Style current_profile={current_profile} link={link} onClick={() => link? location = link : null }>
      {children}
  </Style>
);

Degree.propTypes = {
  current_profile: React.PropTypes.string
}

const mapStatetoProps = createStructuredSelector({
  current_profile : makeSelectCurrentProfile()
})

export default connect(mapStatetoProps)(Degree);
