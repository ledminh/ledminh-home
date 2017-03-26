import {fromJS} from 'immutable';

import {
    HIDE,
    NOW,
    THEN
} from './constants';

const initialState = fromJS({
    now: HIDE,
    then: HIDE
});

export default function profilePictureReducer(state = initialState, action){
  switch(action.type){
    case NOW:
      return state
                .set('now', action.state);
    case THEN:
      return state
                .set('then', action.state);

  }

  return state;
}
