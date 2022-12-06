import { createReducer, on } from '@ngrx/store';
import {
  loadSmartcard,
  loadSmartcardEvents,
  loadSmartcardEventsFailure,
  loadSmartcardEventsSuccess,
  loadSmartcardFailure,
  loadSmartcardSuccess,
} from './smartcard.actions';
import { SmartcardBeneficiary } from '../../models/smartcardBeneficiary';
import { SmartcardEvent } from '../../models/smartcard-event';

export const smartcardFeatureKey = 'smartcard';

export interface SmartcardState {
  history?: SmartcardBeneficiary[];
  historyFinished: boolean;
  events?: SmartcardEvent[];
  eventsFinished: boolean;
}

export const initialState: SmartcardState = {
  historyFinished: false,
  eventsFinished: false,
};

export const smartcardReducer = createReducer(
  initialState,
  on(loadSmartcard, (state) => {
    return {
      ...state,
      history: undefined,
      finished: false,
    };
  }),
  on(loadSmartcardSuccess, (state, { data }) => {
    return {
      ...state,
      history: data,
      historyFinished: true,
    };
  }),
  on(loadSmartcardFailure, (state) => {
    return {
      ...state,
      historyFinished: true,
    };
  }),
  on(loadSmartcardEventsSuccess, (state, { data }) => {
    return {
      ...state,
      events: data,
      eventsFinished: true,
    };
  }),
  on(loadSmartcardEventsFailure, (state) => {
    return {
      ...state,
      eventsFinished: true,
    };
  })
);
