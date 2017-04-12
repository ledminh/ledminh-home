import { createSelector } from 'reselect';

/**
 * Direct selector to the contact state domain
 */
const selectContactDomain = () => (state) => state.get('contact');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Contact
 */

const makeSelectContact = () => createSelector(
  selectContactDomain(),
  (substate) => substate.toJS()
);


const makeSelectIndicatorLeft = () => createSelector(
  selectContactDomain(),
  (substate) => substate.get('indicator_left')
);

const makeSelectContactData = () => createSelector(
  selectContactDomain(),
  (substate) => substate.get('contact_data').toJS()
);

const makeSelectCurrentIndex = () => createSelector(
  selectContactDomain(),
  (substate) => substate.get('current_index')
);

export default makeSelectContact;

export {
  selectContactDomain,
  makeSelectIndicatorLeft,
  makeSelectContactData,
  makeSelectCurrentIndex
};
