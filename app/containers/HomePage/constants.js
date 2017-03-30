/*
 * HomePage Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_PROFILE = 'ledminh/HomePage/CHANGE_PROFILE';
export const CHANGE_SECTION = 'ledminh/HomePage/CHANGE_SECTION';

export const PROFILE_NOW = 'ledminh/HomePage/PROFILE_NOW';
export const PROFILE_THEN = 'ledminh/HomePage/PROFILE_THEN';

export const SECTION_SUMMARY = 'ledminh/HomePage/SECTION_SUMMARY';
export const SECTION_SKILLS = 'ledminh/HomePage/SECTION_SKILLS';
export const SECTION_EXPERIENCE = 'ledminh/HomePage/SECTION_EXPERIENCE';
export const SECTION_EDUCATION = 'ledminh/HomePage/SECTION_EDUCATION';
