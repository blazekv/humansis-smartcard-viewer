import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {
  messageError,
  messageInfo,
  messageSuccess,
  messageWarning,
} from './message.actions';

@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private toastrService: ToastrService
  ) {}

  success$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(messageSuccess),
        tap(({ message, title }) => {
          this.toastrService.success(message, title);
        })
      ),
    { dispatch: false }
  );

  info$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(messageInfo),
        tap(({ message, title }) => {
          this.toastrService.info(message, title);
        })
      ),
    { dispatch: false }
  );

  warning$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(messageWarning),
        tap(({ message, title }) => {
          this.toastrService.warning(message, title);
        })
      ),
    { dispatch: false }
  );

  error$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(messageError),
        tap(({ message, title }) => {
          this.toastrService.error(message, title, { enableHtml: true });
        })
      ),
    { dispatch: false }
  );
}
