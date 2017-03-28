import { take, call, put, fork, select, cancel, takeLatest } from 'redux-saga/effects';

import {now, then} from './actions';

import {
  ENTER,
  CLICK,
  LEAVE,

  PICTURE,
  NOW,
  THEN,

  NORMAL,
  HIDE,
  BOLD,
  CLICKED
} from './constants';

import {makeSelectClicked} from './selectors';

/**
 * Root saga manages watcher lifecycle
 */

export default function* profilePictureWatcher() {
  yield [
      fork(enterSaga),
      fork(leaveSaga),
      fork(clickSaga)
  ];

}

function* enterSaga(){
  while(true){
    let enterAction = yield take(ENTER);
    let clicked = yield select(makeSelectClicked());

    switch(enterAction.name){
      case PICTURE:
          if(clicked !== NOW)
              yield put(now(NORMAL));

          if(clicked !== THEN)
              yield put(then(NORMAL));

          break;
      case NOW:
          yield put(now(BOLD));
          break;
      case THEN:
          yield put(then(BOLD));
    }

  }
}

function* clickSaga(){
    let clicked = yield select(makeSelectClicked());

    if(clicked === NOW)
      yield put(now(BOLD));
    else if (clicked === THEN)
      yield put(then(BOLD));

    while(true){
      let clickAction = yield take(CLICK);

      switch(clickAction.name){
        case NOW:
          yield put(then(NORMAL));
          break;
        case THEN:
          yield put(now(NORMAL));
          break;
      }
    }
}

function* leaveSaga(){
  while(true){
    let leaveAction = yield take(LEAVE);
    let clicked = yield select(makeSelectClicked());

    switch(leaveAction.name){
      case PICTURE:
          if(clicked !== NOW)
            yield put(now(HIDE));

          if(clicked !== THEN)
            yield put(then(HIDE));

          break;
      case NOW:
          if(clicked !== NOW)
            yield put(now(NORMAL));

          break;
      case THEN:
          if(clicked !== THEN)
            yield put(then(NORMAL));
    }

  }
}
