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
import {combineReducers} from 'redux';

import {
  PROFILE_NOW,
  CHANGE_PROFILE
} from './constants';

const initialState = fromJS({
  current_profile: PROFILE_NOW
});

function home_state(state = initialState, action){
  switch(action.type){
    case CHANGE_PROFILE:
      return state
                .set('current_profile', action.name);
  }

  return state;
}

export default combineReducers({
  profile_picture,
  home_state
});
