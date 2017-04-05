import {TOGGLE_SKILL} from './constants';

export function toggleSkill(skill){
  return {
    type: TOGGLE_SKILL,
    skill
  }
}
