import * as types from './types';

export function tableResize(data) {
  return {
    type: types.TABLE_RESIZE,
    data
  };
}

export function changeText(data) {
  return {
    type: types.CHANGE_TEXT,
    data
  };
}

export function changeStyles(data) {
  return {
    type: types.CHANGE_STYLES,
    data
  };
}

export function updateDate() {
  return {
    type: types.UPDATE_DATE
  };
}

export function applyStyle(data) {
  return {
    type: types.APPLY_STYLE,
    data
  };
}

export function changeTitle(data) {
  return {
    type: types.CHANGE_TITLE,
    data
  };
}

