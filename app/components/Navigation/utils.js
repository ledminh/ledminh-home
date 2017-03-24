import React from 'react';

import compose from 'utils/compose';

import Button from './button';

const toUpperCase = (arr) => arr.map(title => title.toUpperCase());

const wrap = (arr) => arr.map((title, i) => <Button key={i}>{title}</Button>)

export const renderButton = compose(wrap, toUpperCase);
