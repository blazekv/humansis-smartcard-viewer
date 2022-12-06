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
import { getRouterParamSelector } from '../state/router/router.selectors';
import { tap } from 'rxjs/operators';
import { getVendorEvents } from '../state/vendor/vendor.selectors';
import { loadVendorEvents } from '../state/vendor/vendor.actions';

@Injectable({
  providedIn: 'root',
})
export class VendorEventsLoadedGuard implements CanActivate {
  constructor(private store: Store<CoreModuleState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkStore();
  }

  private checkStore() {
    return this.store.select(getVendorEvents).pipe(
      withLatestFrom(this.store.select(getRouterParamSelector('id'))),
      tap(([events, id]) => {
        this.store.dispatch(loadVendorEvents({ id }));
      }),
      filter(([events]) => !!events),
      take(1),
      map(() => true)
    );
  }
}
