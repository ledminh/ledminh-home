import { take, call, put, select } from 'redux-saga/effects';

import {delay} from 'redux-saga';

import {changeIndicatorLeft, changeCurrentIndex, loadData} from './actions';

import {
  CLICK,
  REQUEST_DATA,
  LOAD_DATA
} from './constants';

import {contact_data} from 'data';

// Individual exports for testing
export function* clickSaga() {
    while(true){
      let action = yield take(CLICK);

      yield put(changeIndicatorLeft(action.left));

      yield delay(300);

      yield put(changeCurrentIndex(action.index));
    }
}

export function* dataSaga(){
    while(true){
        yield take(REQUEST_DATA);
        yield put(loadData(contact_data));
    }
}

// All sagas to be loaded
export default [
  clickSaga,
  dataSaga
];
