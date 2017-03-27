import React from 'react';

import Wrapper from './wrapper';
import {renderButtons} from './utils';
import messages from './messages';

const ProfileButtons = (props) => (
  <Wrapper>
      {renderButtons(messages.buttons)}
  </Wrapper>
);

export default ProfileButtons;
