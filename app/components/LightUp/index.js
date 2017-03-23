/**
*
* LightUp
*
*/

import React from 'react';
// import styled from 'styled-components';

import {render} from './utils';

function LightUp({children}) {
  return (
    <div>
        {render(children)}
    </div>
  );
}

LightUp.propTypes = {

};

export default LightUp;
