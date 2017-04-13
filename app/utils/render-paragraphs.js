import React from 'react';
import compose from './compose';


/*******************************
* renderParagraphs
********************************/

const split = text => text.split('\\br');

const wrap_para = arr => arr.map((line, i) => <p key={i}>{line}</p>)

export const renderParagraphs = compose(wrap_para, split);
