import { createSelector } from '@ngrx/store';
import { getUserState, getVendorState } from '../index';

export const getVendorEvents = createSelector(getVendorState, (state) => {
  return state.events;
});
