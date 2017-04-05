/**
 *ProfileText selectors
 */

import { createSelector } from 'reselect';

const selectProfileText = (state) => state.get('home')['profile_text'];

export const makeSelectSkillState = (thisSkill) => createSelector(
  selectProfileText,
  (profile_text) => profile_text.get('skills').toJS()  
);
