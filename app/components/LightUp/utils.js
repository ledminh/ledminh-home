import React from 'react';
import compose from 'utils/compose';

import Cell from './cell';


/*****************************
 *  RENDER FUNCTION
 *****************************/
const split = (str) => str.split("");

const wrap = (arr) => arr.map((letter, i) => <Cell key={i}>{letter}</Cell>);

export const render = compose(wrap, split);
