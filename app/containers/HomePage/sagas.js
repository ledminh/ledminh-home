import { take, call, put, fork, select, cancel, takeLatest } from 'redux-saga/effects';

import profilePictureWatcher from 'containers/ProfilePicture/sagas';

function* homePageSaga(){



}

//Bootstrap sagas
export default [
  profilePictureWatcher
]
