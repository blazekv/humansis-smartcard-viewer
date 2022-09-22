import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../models/credentials';
import { Login } from '../../models/login';
import { Smartcard } from '../../models/smartcard';

export const loadSmartcard = createAction(
  '[Smartcard] Load Smartcard',
  props<{ code: string }>()
);

export const loadSmartcardSuccess = createAction(
  '[Smartcard] Load Smartcard Success',
  props<{ data: Smartcard }>()
);

export const loadSmartcardFailure = createAction(
  '[Smartcard] Load Smartcard Fail',
  props<{ error: any }>()
);
