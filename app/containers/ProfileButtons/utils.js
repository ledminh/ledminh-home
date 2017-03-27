import React from 'react';

import compose from 'utils/compose';
import Button from './button';

const toUpperCase = (arr) => arr.map((text) => text.toUpperCase());

const toButton = (arr) => arr.map((text, i) => <Button key={i}>{text}</Button>);

export const renderButtons = compose(toButton, toUpperCase);
