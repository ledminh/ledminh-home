/*
 *
 * Projects reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_DATA,
  CHANGE_PROJECT_CSS_STATE,
  CHANGE_CURRENT_LARGE,
  CHANGE_CATEGORY,
  CHANGE_CATEGORY_DISPLAY
} from './constants';

import {SWITCH_SMALL_SCREEN_MENU_DISPLAY} from 'components/Navigation/constants';

const initialState = fromJS({
  projects: [],
  current_large: ``,
  category_display: false,
  smallscreen_menu: false
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

    case CHANGE_CATEGORY:
      let projects = state.get('projects').toJS();
      projects = projects.map(project => Object.assign({}, project, {show: (project.category === action.category || action.category === '')? true : false}));

      return state
                .mergeDeep({projects : projects});

    case CHANGE_CATEGORY_DISPLAY:
        return state
                  .set('category_display', !state.get('category_display'));

    case SWITCH_SMALL_SCREEN_MENU_DISPLAY:
        return state
                  .set('smallscreen_menu', !state.get('smallscreen_menu'))

    default:
      return state;
  }
}

export default projectsReducer;
