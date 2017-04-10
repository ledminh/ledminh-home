/*
 *
 * Projects actions
 *
 */

import {
  DATA_REQUEST,
  LOAD_DATA,
  CHANGE_PROJECT_CSS_STATE,
  CHANGE_CURRENT_LARGE
} from './constants';

export function dataRequest(request_type, category) {
  return {
    type: DATA_REQUEST,
    request_type,
    category
  };
}

export function loadData(data){
  return {
    type: LOAD_DATA,
    data
  }
}

export function change_CSS_State(state, id, pageY){
  return {
    type: CHANGE_PROJECT_CSS_STATE,
    state,
    id,
    pageY
  }
}

export function changeCurrentLarge(id){
  return {
    type: CHANGE_CURRENT_LARGE,
    id
  }
}
