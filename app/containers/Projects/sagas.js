import { take, call, put, fork, select, cancel, takeLatest } from 'redux-saga/effects';

import cuid from 'cuid';

import {
  DATA_REQUEST,
  DATA_INITIAL,
  DATA_CAT,
  PROJECT_BOX__NORMAL,
  PROJECT_BOX__LARGE,

  CHANGE_PROJECT_CSS_STATE,
  CHANGE_CATEGORY
} from './constants';


import {makeSelectCurrentLarge} from './selectors';
import {loadData, change_CSS_State, changeCurrentLarge} from './actions';

import {projects} from 'data';

// Individual exports for testing
export function* loadDataSaga() {
    while(true){
      let dataRequest = yield take(DATA_REQUEST);
      let data = null;

      switch(dataRequest.request_type){
        case DATA_INITIAL:
          data = yield getDataInitial();

          break;
      }

      yield put(loadData(data));

    }
}

function* getDataInitial(){
    return projects.map((project, i) => ({...project, css_state: PROJECT_BOX__NORMAL, id: cuid(), show: true}));
}

function* getDataCat(category){

    let thisProjects = projects.filter(project => project.category === category);

    return thisProjects.map((project, i) => ({...project, css_state: PROJECT_BOX__NORMAL}));
}

function* manageLargeBox(){
  while(true){
    let action = yield take(CHANGE_PROJECT_CSS_STATE);


    if(action.state === PROJECT_BOX__LARGE){
        //Set previousLagre to normal (if any)
        let currentLarge = yield select(makeSelectCurrentLarge());
        if(currentLarge !== `` && currentLarge !== action.id)
            yield put(change_CSS_State(PROJECT_BOX__NORMAL, currentLarge));

        yield put(changeCurrentLarge(action.id));


    }
  }
}


// All sagas to be loaded
export default [
  loadDataSaga,
  manageLargeBox
];
