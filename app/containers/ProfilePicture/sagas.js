import { take, call, put, fork, select, cancel, takeLatest } from 'redux-saga/effects';

import {now, then} from './actions';

import {
  ENTER,
  CLICK,
  LEAVE,

  PICTURE,
  NOW,
  THEN,

  SHOW,
  HIDE,
  BOLD
} from './constants';
/**
 * Root saga manages watcher lifecycle
 */

export default function* profilePictureWatcher() {
  yield fork(enterSaga);
  yield fork(leaveSaga);

}

function* enterSaga(){
  while(true){
    let enterAction = yield take(ENTER);

    switch(enterAction.name){
      case PICTURE:
          yield [
              put(now(SHOW)),
              put(then(SHOW))
          ]
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

}

function* leaveSaga(){
  while(true){
    let enterAction = yield take(LEAVE);

    switch(enterAction.name){
      case PICTURE:
          yield [
              put(now(HIDE)),
              put(then(HIDE))
          ]
      break;
      case NOW:
          yield put(now(SHOW));
          break;
      case THEN:
          yield put(then(SHOW));
    }

  }
}
