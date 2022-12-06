import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, Observable, take, withLatestFrom } from 'rxjs';
import { CoreModuleState } from '../state';
import { Store } from '@ngrx/store';
import { getSmartcardEvents } from '../state/smartcard/smartcard.selectors';
import { getRouterParamSelector } from '../state/router/router.selectors';
import { tap } from 'rxjs/operators';
import { loadSmartcardEvents } from '../state/smartcard/smartcard.actions';

@Injectable({
  providedIn: 'root',
})
export class SmartcardEventsLoadedGuard implements CanActivate {
  constructor(private store: Store<CoreModuleState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    booleanObservable:
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree = this.checkStore()
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return booleanObservable;
  }

  private checkStore() {
    return this.store.select(getSmartcardEvents).pipe(
      withLatestFrom(this.store.select(getRouterParamSelector('code'))),
      tap(([events, code]) => {
        this.store.dispatch(loadSmartcardEvents({ code }));
      }),
      filter(([events]) => !!events),
      take(1),
      map(() => true)
    );
  }
}
