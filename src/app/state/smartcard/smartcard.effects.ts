import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, from, map, of, switchMap } from 'rxjs';
import { go } from '../router/router.actions';
import { SmartcardService } from '../../services/smartcard.service';
import {
  loadSmartcard,
  loadSmartcardEvents,
  loadSmartcardEventsFailure,
  loadSmartcardEventsSuccess,
  loadSmartcardFailure,
  loadSmartcardSuccess,
} from './smartcard.actions';
import { messageWarning } from '../message/message.actions';

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
        return from(this.smartcardService.getHistory(code)).pipe(
          map((data) => loadSmartcardSuccess({ data, code })),
          catchError((error: any) => of(loadSmartcardFailure({ error })))
        );
      })
    );
  });

  loadSmartcardEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSmartcardEvents),
      switchMap(({ code }) => {
        return from(this.smartcardService.getEvents(code)).pipe(
          map((data) => loadSmartcardEventsSuccess({ data })),
          catchError((error: any) => of(loadSmartcardEventsFailure({ error })))
        );
      })
    );
  });

  loadSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSmartcardSuccess),
      map(({ code }) => go({ path: ['/smartcard', code] }))
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
