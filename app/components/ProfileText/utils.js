import React from 'react';
import compose from 'utils/compose';

const split = text => text.split('\\br');

const wrap = arr => arr.map((line, i) => <p key={i}>{line}</p>)

export const renderParagraphs = compose(wrap, split);
