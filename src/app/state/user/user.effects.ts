import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFail, loginSuccess, logout } from './user.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { go } from '../router/router.actions';
import { messageError } from '../message/message.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap(({ credentials }) => {
        return from(this.userService.login(credentials)).pipe(
          map((data) => loginSuccess({ data })),
          catchError((error: any) => of(loginFail({ error })))
        );
      })
    );
  });

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      map(() => {
        return go({ path: ['/'] });
      })
    );
  });

  loginFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginFail),
      map(() => {
        return messageError({ message: 'Login failed' });
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      tap(() => {
        sessionStorage.removeItem('user');
      }),
      map(() => go({ path: ['/login'] }))
    );
  });
}
