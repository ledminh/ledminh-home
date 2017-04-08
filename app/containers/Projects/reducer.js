/*
 *
 * Projects reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_DATA,
  CHANGE_PROJECT_CSS_STATE
} from './constants';

const initialState = fromJS({});

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return fromJS(action.data);
    case CHANGE_PROJECT_CSS_STATE:
      return state
                .setIn([action.title, 'css_state'], action.state);
    default:
      return state;
  }
}

export default projectsReducer;
