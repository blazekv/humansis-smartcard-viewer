import { createAction, props } from '@ngrx/store';

export enum MessageActionTypes {
  SUCCESS = '[Message] Success',
  INFO = '[Message] Info',
  WARNING = '[Message] Warning',
  ERROR = '[Message] Error',
}

export const messageSuccess = createAction(
  MessageActionTypes.SUCCESS,
  props<{ message: string; title?: string }>()
);
export const messageInfo = createAction(
  MessageActionTypes.INFO,
  props<{ message: string; title?: string }>()
);
export const messageWarning = createAction(
  MessageActionTypes.WARNING,
  props<{ message: string; title?: string }>()
);
export const messageError = createAction(
  MessageActionTypes.ERROR,
  props<{ message: string; title?: string }>()
);
