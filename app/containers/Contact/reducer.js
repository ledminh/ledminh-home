/*
 *
 * Contact reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_INDICATOR_LEFT,
  CHANGE_CURRENT_INDEX,
  LOAD_DATA
} from './constants';

const initialState = fromJS({
  indicator_left: `0px`,
  current_index: -1,
  contact_data: []
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
                .mergeDeep({contact_data: action.data})
    case CHANGE_CURRENT_INDEX:
      return state
                .set('current_index', action.index);

    case CHANGE_INDICATOR_LEFT:
      return state
                .set('indicator_left', action.left + 'px');

    default:
      return state;
  }
}

export default contactReducer;
