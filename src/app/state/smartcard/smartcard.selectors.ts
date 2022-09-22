import { createSelector } from '@ngrx/store';
import { getSmartcardState } from '../index';

export const getSmartcard = createSelector(getSmartcardState, (state) => {
  return state.entity;
});
