/**
 * ProfilePicture selectors
 */

import { createSelector } from 'reselect';

const selectProfilePicture = (state) => state.get('home')['profile_picture'];

const makeSelectNow = () => createSelector(
  selectProfilePicture,
  (profile_picture) => profile_picture.get('now')
);

const makeSelectThen = () => createSelector(
  selectProfilePicture,
  (profile_picture) => profile_picture.get('then')
);

const makeSelectClicked = () => createSelector(
  selectProfilePicture,
  (profile_picture) => profile_picture.get('clicked')
);

export {
  selectHome,
  makeSelectNow,
  makeSelectThen,
  makeSelectClicked
};
