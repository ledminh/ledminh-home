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
  projects: [],
  current_large: ``
});

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
                 .mergeDeep({projects : action.data});

    case CHANGE_PROJECT_CSS_STATE:
      const index = state.get('projects').findIndex(project => project.get('id') === action.id);
      return state
                .setIn(['projects', index, 'css_state'], action.state);
    case CHANGE_CURRENT_LARGE:
      return state
                .set('current_large', action.id);
    default:
      return state;
  }
}

export default projectsReducer;
