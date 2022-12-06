import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../models/credentials';
import { Login } from '../../models/login';

export const login = createAction(
  '[User] Login',
  props<{ credentials: Credentials }>()
);
export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ data: Login }>()
);
export const loginFail = createAction(
  '[User] Login Fail',
  props<{ error: any }>()
);

export const logout = createAction('[User] Logout');
