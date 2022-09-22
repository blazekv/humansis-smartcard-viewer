import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import { go } from '../router/router.actions';
import { SmartcardService } from '../../services/smartcard.service';
import {
  loadSmartcard,
  loadSmartcardFailure,
  loadSmartcardSuccess,
} from './smartcard.actions';
import { loginFail } from '../user/user.actions';
import { messageError, messageWarning } from '../message/message.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class SmartcardEffects {
  constructor(
    private actions$: Actions,
    private smartcardService: SmartcardService
  ) {}

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSmartcard),
      switchMap(({ code }) => {
        return from(this.smartcardService.get(code)).pipe(
          map((data) => loadSmartcardSuccess({ data })),
          catchError((error: any) => of(loadSmartcardFailure({ error })))
        );
      })
    );
  });

  loadSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSmartcardSuccess),
      map(({ data }) => go({ path: ['/smartcard', data.serial_number] }))
    );
  });

  smartcardNotFound$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSmartcardFailure),
      filter((data) => data.error.error.code === 404),
      map(() => {
        return messageWarning({ message: 'Card was not found.' });
      })
    );
  });
}
