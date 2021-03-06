/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import {fromJS} from 'immutable';

import profile_picture from 'containers/ProfilePicture/reducer';
import profile_text from 'containers/ProfileText/reducer';

import {combineReducers} from 'redux';

import {
  PROFILE_NOW,
  SECTION_SUMMARY,

  CHANGE_PROFILE,
  CHANGE_SECTION
} from './constants';

import {SWITCH_SMALL_SCREEN_MENU_DISPLAY} from 'components/Navigation/constants';

const initialState = fromJS({
  current_profile: PROFILE_NOW,
  current_section: SECTION_SUMMARY,
  smallscreen_menu: false
});

function home_state(state = initialState, action){
  switch(action.type){
    case CHANGE_PROFILE:
      return state
                .set('current_profile', action.name);
    case CHANGE_SECTION:
      return state
                .set('current_section', action.name);
    case SWITCH_SMALL_SCREEN_MENU_DISPLAY:
      return state
                .set('smallscreen_menu', !state.get('smallscreen_menu'))
  }

  return state;
}

export default combineReducers({
  profile_picture,
  profile_text,
  home_state
});
