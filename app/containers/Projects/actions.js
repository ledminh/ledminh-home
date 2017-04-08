/*
 *
 * Projects actions
 *
 */

import {
  DATA_REQUEST,
  LOAD_DATA,
  CHANGE_PROJECT_CSS_STATE
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

export function change_CSS_State(state, title){
  return {
    type: CHANGE_PROJECT_CSS_STATE,
    state,
    title
  }
}
