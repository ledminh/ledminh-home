
import { fromJS } from 'immutable';
import aboutMeReducer from '../reducer';

describe('aboutMeReducer', () => {
  it('returns the initial state', () => {
    expect(aboutMeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
