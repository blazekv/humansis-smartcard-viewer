import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../models/credentials';
import { Login } from '../../models/login';
import { SmartcardBeneficiary } from '../../models/smartcardBeneficiary';
import { SmartcardEvent } from '../../models/smartcard-event';

export const loadSmartcard = createAction(
  '[Smartcard] Load Smartcard',
  props<{ code: string }>()
);

export const loadSmartcardSuccess = createAction(
  '[Smartcard] Load Smartcard Success',
  props<{ data: SmartcardBeneficiary[]; code: string }>()
);

export const loadSmartcardFailure = createAction(
  '[Smartcard] Load Smartcard Fail',
  props<{ error: any }>()
);

export const loadSmartcardEvents = createAction(
  '[Smartcard] Load Smartcard Events',
  props<{ code: string }>()
);

export const loadSmartcardEventsSuccess = createAction(
  '[Smartcard] Load Smartcard Events Success',
  props<{ data: SmartcardEvent[] }>()
);

export const loadSmartcardEventsFailure = createAction(
  '[Smartcard] Load Smartcard Events Fail',
  props<{ error: any }>()
);
