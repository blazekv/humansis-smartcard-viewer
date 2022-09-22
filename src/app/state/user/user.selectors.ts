import { createSelector } from '@ngrx/store';
import { getUserState } from '../index';

export const getToken = createSelector(getUserState, (state) => {
  return state.token;
});
