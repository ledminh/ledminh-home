/*
 * ProfileText Reducer
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

import {about_me} from 'data';

import {TOGGLE_SKILL} from './constants';

const initialState = fromJS({
    skills : {}
  }
);

export default function profile_text(state = initialState, action) {
  switch(action.type){
    case TOGGLE_SKILL:
      let thisState = state.getIn(['skills', action.skill]);
      return state.setIn(['skills', action.skill], !thisState)

  }

  return state;
}

/*
const getSkillArr = () => {
    let results = []

    Object.keys(about_me).forEach((profile) => {
        Object.keys(about_me[profile].skills).forEach((cat) => {
          Object.keys(about_me[profile].skills[cat]).forEach(skill => results.push(skill));
        })
    });

    console.log(results);

    return results;
}

getSkillArr();
*/
