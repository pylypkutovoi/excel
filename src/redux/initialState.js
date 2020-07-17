import {storage} from '@core/utils';
import {defaultTitle, defaultStyles} from '@/constants';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles
};

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  CurrentText: ''
});
export const initialState = storage('excel-state')
    ? normalize(storage('excel-state'))
    : defaultState;
