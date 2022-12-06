import { createReducer, on } from '@ngrx/store';
import {
  loadSmartcard,
  loadSmartcardEvents,
  loadSmartcardEventsSuccess,
  loadSmartcardSuccess,
} from './smartcard.actions';
import { SmartcardBeneficiary } from '../../models/smartcardBeneficiary';
import { SmartcardEvent } from '../../models/smartcard-event';

export const smartcardFeatureKey = 'smartcard';

export interface SmartcardState {
  history?: SmartcardBeneficiary[];
  events?: SmartcardEvent[];
}

export const initialState: SmartcardState = {};

export const smartcardReducer = createReducer(
  initialState,
  on(loadSmartcard, (state) => {
    return {
      ...state,
      history: undefined,
    };
  }),
  on(loadSmartcardSuccess, (state, { data }) => {
    return {
      ...state,
      history: data,
    };
  }),
  on(loadSmartcardEventsSuccess, (state, { data }) => {
    return {
      ...state,
      events: data,
    };
  })
);
