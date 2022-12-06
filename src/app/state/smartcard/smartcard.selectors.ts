import { createSelector } from '@ngrx/store';
import { getSmartcardState } from '../index';

export const getSmartcardHistory = createSelector(
  getSmartcardState,
  (state) => {
    return state.history;
  }
);

export const getSmartcardEvents = createSelector(getSmartcardState, (state) => {
  return state.events;
});

export const selectHistoryRequestFinished = createSelector(
  getSmartcardState,
  (state) => {
    return state.historyFinished;
  }
);

export const selectEventsRequestFinished = createSelector(
  getSmartcardState,
  (state) => {
    return state.eventsFinished;
  }
);
