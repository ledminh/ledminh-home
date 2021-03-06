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
  (data) => data.get('projects').toJS().filter((project) => project.show)
);

const makeSelectCurrentLarge = () => createSelector(
  selectProjectsDomain(),
  (data) => data.get('current_large')
);

const makeSelectCategories = () => createSelector(
  selectProjectsDomain(),
  (data) => data.get('projects').toJS().reduce((result,project) => ({...result, [project.category] : project.id}), {})
);

const makeSelectCategoriesDisplay = () => createSelector(
  selectProjectsDomain(),
  (data) => data.get('category_display')
);

const makeSelectSmallScreenMenu = () => createSelector(
  selectProjectsDomain(),
  (data) => data.get('smallscreen_menu')
)

export default makeSelectProjects;

export {
  selectProjectsDomain,
  makeSelectCurrentLarge,
  makeSelectCategories,
  makeSelectCategoriesDisplay,
  makeSelectSmallScreenMenu
};
