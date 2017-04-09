import { createSelector } from 'reselect';

/**
 * Direct selector to the projects state domain
 */
const selectProjectsDomain = () => (state) => state.get('projects');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Projects
 */

const makeSelectProjects = () => createSelector(
  selectProjectsDomain(),
  (data) => data.get('projects').toJS()
);

const makeSelectCurrentLarge = () => createSelector(
  selectProjectsDomain(),
  (data) => data.get('current-large')
);

export default makeSelectProjects;

export {
  selectProjectsDomain,
  makeSelectCurrentLarge
};
