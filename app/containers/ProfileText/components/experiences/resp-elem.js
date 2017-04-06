import React from 'react';
import styled from 'styled-components';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {makeSelectCurrentProfile} from 'containers/HomePage/selectors';

import {
  PROFILE_NOW
} from 'containers/HomePage/constants';

const Style = styled.div`
  position: relative;
  margin-bottom: 15px;

  &:hover {
    box-shadow: 0px 0px 20px;

    & > div {
      background-color: ${props => props.current_profile === PROFILE_NOW ? `#bfbfbf` : `#c3cee0`};
    }
  }


`;

const Bullet = styled.div`
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translate(0%, -50%);
  border: 1px solid black;
  width: 10px;
  height: 10px;
`;

const Inner = styled.div`
  margin-left: 27px;
  padding: 5px;
`;
const RespElem = ({children, current_profile}) => (
  <Style current_profile={current_profile}>
      <Bullet />
      <Inner>{children}</Inner>
  </Style>
);

RespElem.propTypes = {
  current_profile: React.PropTypes.string
}

const mapStatetoProps = createStructuredSelector({
  current_profile : makeSelectCurrentProfile()
})

export default connect(mapStatetoProps)(RespElem);
