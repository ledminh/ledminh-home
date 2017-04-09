import { take, call, put, fork, select, cancel, takeLatest } from 'redux-saga/effects';

import {
  DATA_REQUEST,
  DATA_INITIAL,
  DATA_CAT,
  PROJECT_BOX__NORMAL,
  PROJECT_BOX__LARGE,

  CHANGE_PROJECT_CSS_STATE
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
        case DATA_CAT:
          data = yield getDataCat(dataRequest.category);
          break;
      }

      yield put(loadData(data));
    }
}

function* getDataInitial(){
    return projects.reduce((result, project) => {
          result[project.title] = {...project, css_state: PROJECT_BOX__NORMAL};
          return result;
    }, {});
}

function* getDataCat(category){

    let thisProjects = projects.filter(project => project.category === category);

    return thisProjects.reduce((result, project) => {
        result[project.title] = {...project, css_state: PROJECT_BOX__NORMAL};
    }, {});
}

function* manageLargeBox(){
  while(true){
    let action = yield take(CHANGE_PROJECT_CSS_STATE);


    if(action.state === PROJECT_BOX__LARGE){
        let currentLarge = yield select(makeSelectCurrentLarge());

        if(currentLarge !== `` && currentLarge !== action.title)
            yield put(change_CSS_State(PROJECT_BOX__NORMAL, currentLarge));

        yield put(changeCurrentLarge(action.title));


    }
  }
}

// All sagas to be loaded
export default [
  loadDataSaga,
  manageLargeBox
];
