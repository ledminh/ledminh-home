/*
 * ProfilePicture Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const PICTURE = 'ledminh/ProfilePicture/PICTURE';
export const NOW = 'ledminh/ProfilePicture/NOW';
export const THEN = 'ledminh/ProfilePicture/THEN';

export const ENTER = 'ledminh/ProfilePicture/ENTER';
export const CLICK = 'ledminh/ProfilePicture/CLICK';
export const LEAVE = 'ledminh/ProfilePicture/LEAVE';

export const NORMAL = 'ledminh/ProfilePicture/NORMAL';
export const BOLD = 'ledminh/ProfilePicture/BOLD';
export const HIDE = 'ledminh/ProfilePicture/HIDE';
export const CLICKED = 'ledminh/ProfilePicture/CLICKED';
