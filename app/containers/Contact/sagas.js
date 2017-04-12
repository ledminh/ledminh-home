import { take, call, put, select } from 'redux-saga/effects';

import {delay} from 'redux-saga';

import {changeIndicatorLeft, changeCurrentIndex} from './actions';

import {
  CLICK
} from './constants';

// Individual exports for testing
export function* clickSaga() {
    while(true){
      let action = yield take(CLICK);

      yield put(changeIndicatorLeft(action.left));

      yield delay(300);

      yield put(changeCurrentIndex(action.index));
    }
}

// All sagas to be loaded
export default [
  clickSaga,
];
