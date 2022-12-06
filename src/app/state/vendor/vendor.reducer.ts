import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from '../user/user.actions';
import { loadVendorEventsSuccess } from './vendor.actions';

export const vendorFeatureKey = 'vendor';

export interface VendorState {
  events?: any[];
}

export const initialState: VendorState = {};

export const vendorReducer = createReducer(
  initialState,
  on(loadVendorEventsSuccess, (state, { data }) => {
    return {
      ...state,
      events: data,
    };
  })
);
