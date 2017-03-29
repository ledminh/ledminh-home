import React from 'react';
import styled from 'styled-components';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import Now from './now';
import Then from './then';
import NowThen from './now_then';

import Frame from './frame';
import Img from './img';

import {makeSelectNow, makeSelectThen} from "./selectors";

import {
  NOW,
  THEN,
  PICTURE
} from './constants';

import {enter, leave, click} from './actions';


const ProfilePicture = ({onEnterPicture, onEnterNow, onEnterThen,
                            onLeavePicture, onLeaveNow, onLeaveThen,
                            onClickNow, onClickThen,
                            now, then}) => (
  <Frame onMouseEnter={onEnterPicture} onMouseLeave={onLeavePicture}>
      <NowThen>
          <Now state={now} onMouseEnter={onEnterNow} onMouseLeave={onLeaveNow} onClick={onClickNow}/>
          <Then state={then} onMouseEnter={onEnterThen} onMouseLeave={onLeaveThen} onClick={onClickThen}/>
      </NowThen>
      <Img src="https://www.ledminh.com/imgs/about-me/profile-picture.jpg" />
  </Frame>
);

function mapDispatchToProps(dispatch) {
  return {
      onEnterPicture: (e) => dispatch(enter(PICTURE)),
      onEnterNow: (e) => dispatch(enter(NOW)),
      onEnterThen: (e) => dispatch(enter(THEN)),

      onLeavePicture: (e) => dispatch(leave(PICTURE)),
      onLeaveNow: (e) => dispatch(leave(NOW)),
      onLeaveThen: (e) => dispatch(leave(THEN)),

      onClickNow: (e) => dispatch(click(NOW)),
      onClickThen: (e) => dispatch(click(THEN))
  };
}

const mapStateToProps = createStructuredSelector({
    now: makeSelectNow(),
    then: makeSelectThen()
});



export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
