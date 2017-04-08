import { take, call, put, fork, select, cancel, takeLatest } from 'redux-saga/effects';

import {
  DATA_REQUEST,
  DATA_INITIAL,
  DATA_CAT,
  PROJECT_BOX__NORMAL
} from './constants';


import {loadData} from './actions';

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


// All sagas to be loaded
export default [
  loadDataSaga,
];
