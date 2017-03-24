import { createSelector } from 'reselect';

/**
 * Direct selector to the aboutMe state domain
 */
const selectAboutMeDomain = () => (state) => state.get('home')
                                                  .get('aboutMe');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AboutMe
 */

const makeSelectAboutMe = () => createSelector(
  selectAboutMeDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAboutMe;
export {
  selectAboutMeDomain,
};
