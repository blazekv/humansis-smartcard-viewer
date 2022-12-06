import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../models/credentials';
import { Login } from '../../models/login';
import { VendorEvent } from '../../models/vendor-event';

export const loadVendorEvents = createAction(
  '[Vendor] Load Vendor Events',
  props<{ id: number }>()
);
export const loadVendorEventsSuccess = createAction(
  '[Vendor] Load Vendor Events Success',
  props<{ data: VendorEvent[] }>()
);
export const loadVendorEventsFail = createAction(
  '[Vendor] Load Vendor Events Fail',
  props<{ error: any }>()
);
