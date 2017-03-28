import {fromJS} from 'immutable';

import {
    HIDE,
    NOW,
    THEN,
    CLICK
} from './constants';

const initialState = fromJS({
    now: HIDE,
    then: HIDE,
    clicked: NOW
});


export default function profilePictureReducer(state = initialState, action){
  switch(action.type){
    case NOW:
      return state
                .set('now', action.state);
    case THEN:
      return state
                .set('then', action.state);
    case CLICK:
      return state
               .set('clicked', action.name);
  }

  return state;
}
