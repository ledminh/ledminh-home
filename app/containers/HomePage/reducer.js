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
import profile_picture from 'containers/ProfilePicture/reducer';
import {combineReducers} from 'redux';


export default combineReducers({
  profile_picture
});
