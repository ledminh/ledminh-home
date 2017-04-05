import styled from 'styled-components';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {makeSelectCurrentProfile} from 'containers/HomePage/selectors';

import {
  PROFILE_NOW
} from 'containers/HomePage/constants';


const H2 = styled.div`
  background-color: ${props => (props.current_profile === PROFILE_NOW)? 'gray' : '#36445b'};
  color: ${props => (props.current_profile === PROFILE_NOW)? 'black' : 'white'};
  margin: 10px 0px 0px 20px;
  padding-left: 10px;
  font-weight: bold;
`;

const mapStateToProps = createStructuredSelector({
  current_profile: makeSelectCurrentProfile()
});

export default connect(mapStateToProps)(H2);
