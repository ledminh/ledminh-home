/*
 *
 * Contact reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLICK,
} from './constants';

const initialState = fromJS({
  current_clicked: ``,
  indicator_left: `0px`
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK:
      return state
                .set('current_clicked', action.name)
                .set('indicator_left', action.left + 'px');
    default:
      return state;
  }
}

export default contactReducer;
