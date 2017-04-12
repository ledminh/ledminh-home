/*
 *
 * Contact actions
 *
 */

import {
  CLICK,
  CHANGE_INDICATOR_LEFT,
  CHANGE_CURRENT_INDEX
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
