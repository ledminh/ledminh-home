/*
 *
 * Contact reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_INDICATOR_LEFT,
  CHANGE_CURRENT_INDEX
} from './constants';

const initialState = fromJS({
  indicator_left: `0px`,
  current_index: -1,
  contact_data: [
    {
      title: 'Email',
      content: 'duyminh.le310@gmail.com'
    },

    {
      title: 'LinkedIn',
      content: 'https://www.linkedin.com/in/ledminh/'
    },

    {
      title: 'GitHub',
      content: 'https://github.com/ledminh'
    },

    {
      title: "Free Code Camp",
      content: 'https://www.freecodecamp.com/ledminh'
    }
  ]
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_INDEX:
      return state
                .set('current_index', action.index);

    case CHANGE_INDICATOR_LEFT:
      return state
                .set('indicator_left', action.left + 'px');
    default:
      return state;
  }
}

export default contactReducer;
