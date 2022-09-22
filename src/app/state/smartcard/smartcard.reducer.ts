import { createReducer, on } from '@ngrx/store';
import { loadSmartcardSuccess } from './smartcard.actions';
import { Smartcard } from '../../models/smartcard';

export const smartcardFeatureKey = 'smartcard';

export interface SmartcardState {
  entity?: Smartcard;
}

export const initialState: SmartcardState = {};

export const smartcardReducer = createReducer(
  initialState,
  on(loadSmartcardSuccess, (state, { data }) => {
    return {
      ...state,
      entity: data,
    };
  })
);
