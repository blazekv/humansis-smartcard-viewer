import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { CoreModuleState } from '../state';
import { Store } from '@ngrx/store';
import { getToken } from '../state/user/user.selectors';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<CoreModuleState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      switchMap((token) => {
        if (token) {
          const authHeader = `Bearer ${token}`;
          const modified = req.clone({
            setHeaders: { Authorization: authHeader },
          });
          return next.handle(modified);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
