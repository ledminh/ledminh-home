/**
 *HomePage selectors
 */

import { createSelector } from 'reselect';

const selectHomeState = (state) => state.get('home')['home_state'];

const makeSelectCurrentProfile = () => createSelector(
  selectHomeState,
  (home_state) => home_state.get('current_profile')
);

const makeSelectCurrentSection = () => createSelector(
  selectHomeState,
  (home_state) => home_state.get('current_section')
);

const makeSelectSmallScreenMenu = () => createSelector(
  selectHomeState,
  (home_state) => home_state.get('smallscreen_menu')
)

export {
  selectHomeState,
  makeSelectCurrentProfile,
  makeSelectCurrentSection,
  makeSelectSmallScreenMenu
};
