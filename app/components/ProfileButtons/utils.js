import React from 'react';

import compose from 'utils/compose';
import Button from './button';



const prepare = ({buttons, current_profile}) =>
                                      buttons.map((button) => Object.assign({}, button, {current_profile: current_profile}));

const toUpperCase = (buttons) => buttons.map((button) =>
                                            Object.assign({}, button, {text: button.text.toUpperCase()}));

const toButton = (arr) => arr.map((button, i) =>
                                        <Button key={i} current_profile={button.current_profile} section={button.section}>{button.text}</Button>);

export const renderButtons = compose(toButton, toUpperCase, prepare);
