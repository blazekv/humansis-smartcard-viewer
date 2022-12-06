import { Action, createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  id?: string;
  token?: string;
}

export const initialState: UserState = {};

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { data }) => {
    return {
      ...state,
      id: data.userId,
      token: data.token,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      id: undefined,
      token: undefined,
    };
  })
);
