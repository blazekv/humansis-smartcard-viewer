import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { back, forward, go } from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(go),
        tap(({ path, query, extras }) => {
          this.router.navigate(path, { queryParams: query, ...extras });
        })
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(back),
        tap(() => {
          this.location.back();
        })
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(forward),
        tap(() => {
          this.location.forward();
        })
      ),
    { dispatch: false }
  );
}
