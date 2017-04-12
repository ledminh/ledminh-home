/*
 *
 * Contact actions
 *
 */

import {
  CLICK,
  CHANGE_INDICATOR_LEFT,
  CHANGE_CURRENT_INDEX,
  LOAD_DATA,
  REQUEST_DATA
} from './constants';

export function click(index, left) {
  return {
    type: CLICK,
    index,
    left
  };
}

export function changeIndicatorLeft(left){
  return {
    type: CHANGE_INDICATOR_LEFT,
    left
  }
}

export function changeCurrentIndex(index){
  return {
    type: CHANGE_CURRENT_INDEX,
    index
  }
}

export function requestData(){
  return {
    type: REQUEST_DATA
  }
}

export function loadData(data){
  return {
    type: LOAD_DATA,
    data
  }
}
