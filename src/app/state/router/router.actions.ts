import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionTypes {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward',
}

export const go = createAction(
  RouterActionTypes.GO,
  props<{ path: any[]; query?: object; extras?: NavigationExtras }>()
);
export const back = createAction(RouterActionTypes.BACK);
export const forward = createAction(RouterActionTypes.FORWARD);
