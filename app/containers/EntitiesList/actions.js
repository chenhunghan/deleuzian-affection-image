/*
 *
 * EntitiesList actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_HIGHLIGHT_ENTITY,
  GET_EMOTION_REQUESTED
} from './constants';

export default function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeHighlightEntity(enitiy) {
  return {
    type: CHANGE_HIGHLIGHT_ENTITY,
    payload: enitiy
  };
}