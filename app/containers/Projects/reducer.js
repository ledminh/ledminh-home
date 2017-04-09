/*
 *
 * Projects reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_DATA,
  CHANGE_PROJECT_CSS_STATE,
  CHANGE_CURRENT_LARGE
} from './constants';

const initialState = fromJS({
  projects: {},
  'current-large': ``
});

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
                 .mergeDeep({projects : action.data});

    case CHANGE_PROJECT_CSS_STATE:
      return state
                .setIn(['projects', action.title, 'css_state'], action.state);
    case CHANGE_CURRENT_LARGE:
      return state
                .set('current-large', action.title);
    default:
      return state;
  }
}

export default projectsReducer;
