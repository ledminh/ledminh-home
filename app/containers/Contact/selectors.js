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

const makeSelectCurrentClicked = () => createSelector(
  selectContactDomain(),
  (contact) => contact.get('current_clicked')
);

const makeSelectIndicatorLeft = () => createSelector(
  selectContactDomain(),
  (contact) => contact.get('indicator_left')
);


export default makeSelectContact;

export {
  selectContactDomain,
  makeSelectCurrentClicked,
  makeSelectIndicatorLeft
};
