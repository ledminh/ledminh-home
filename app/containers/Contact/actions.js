/*
 *
 * Contact actions
 *
 */

import {
  CLICK,
} from './constants';

export function click(name, left) {
  return {
    type: CLICK,
    name,
    left
  };
}
