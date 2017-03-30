import React from 'react';

import Wrapper from './wrapper';
import {renderButtons} from './utils';
import messages from './messages';

const ProfileButtons = ({current_profile}) => (
  <Wrapper current_profile={current_profile}>
      {renderButtons({buttons: messages.buttons, current_profile})}
  </Wrapper>
);


ProfileButtons.propTypes = {
  current_profile: React.PropTypes.string
};


export default ProfileButtons;
