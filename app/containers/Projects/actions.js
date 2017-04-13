/*
 *
 * Projects actions
 *
 */

import {
  DATA_REQUEST,
  LOAD_DATA,
  CHANGE_PROJECT_CSS_STATE,
  CHANGE_CURRENT_LARGE,
  CHANGE_CATEGORY,
  CHANGE_CATEGORY_DISPLAY
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

export function changeCategory(category){
  return {
    type: CHANGE_CATEGORY,
    category
  }
}

export function changeCategoryDisplay(){
  return {
    type: CHANGE_CATEGORY_DISPLAY
  }
}
