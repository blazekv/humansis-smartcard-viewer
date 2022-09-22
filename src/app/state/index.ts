import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './user/user.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router/router.reducers';
import {
  smartcardReducer,
  SmartcardState,
} from './smartcard/smartcard.reducer';

export interface CoreModuleState {
  routerReducer: RouterReducerState<RouterStateUrl>;
  user: UserState;
  smartcard: SmartcardState;
}

export const reducers: ActionReducerMap<CoreModuleState> = {
  user: userReducer,
  routerReducer: routerReducer,
  smartcard: smartcardReducer,
};

export const getUserState = (state: CoreModuleState) => state.user;
export const getRouterState = (state: CoreModuleState) => state.routerReducer;
export const getSmartcardState = (state: CoreModuleState) => state.smartcard;
