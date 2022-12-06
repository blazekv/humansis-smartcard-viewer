import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './user/user.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router/router.reducers';
import {
  smartcardReducer,
  SmartcardState,
} from './smartcard/smartcard.reducer';
import { vendorReducer, VendorState } from './vendor/vendor.reducer';

export interface CoreModuleState {
  routerReducer: RouterReducerState<RouterStateUrl>;
  user: UserState;
  smartcard: SmartcardState;
  vendor: VendorState;
}

export const reducers: ActionReducerMap<CoreModuleState> = {
  user: userReducer,
  routerReducer: routerReducer,
  smartcard: smartcardReducer,
  vendor: vendorReducer,
};

export const getUserState = (state: CoreModuleState) => state.user;
export const getRouterState = (state: CoreModuleState) => state.routerReducer;
export const getSmartcardState = (state: CoreModuleState) => state.smartcard;
export const getVendorState = (state: CoreModuleState) => state.vendor;
