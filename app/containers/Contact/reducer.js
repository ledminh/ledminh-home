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

import {SWITCH_SMALL_SCREEN_MENU_DISPLAY} from 'components/Navigation/constants';


const initialState = fromJS({
  indicator_left: `0px`,
  current_index: -1,
  contact_data: [],
  smallscreen_menu: false
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

    case SWITCH_SMALL_SCREEN_MENU_DISPLAY:
      return state
                .set('smallscreen_menu', !state.get('smallscreen_menu'))
    default:
      return state;
  }
}

export default contactReducer
