import React from 'react';
import cuid from 'cuid';

import compose from 'utils/compose';
import Button from './button';

const menuOnClick = (e) => {};

const toUpperCase = (arr) => arr.map(button => Object.assign({}, button, {title: button.title.toUpperCase()}));

const wrap = (arr) => arr.map((button, i) => <Button key={i} link={button.link}>{button.title}</Button>)

const smallScreen = (arr) => [...arr, <Button key={cuid()} smallscreen>MENU</Button>];

export const renderButton = compose(smallScreen, wrap, toUpperCase);
