import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, mapTo, Observable, take, withLatestFrom } from 'rxjs';
import { CoreModuleState } from '../state';
import { Store } from '@ngrx/store';
import { getSmartcardHistory } from '../state/smartcard/smartcard.selectors';
import { getRouterParamSelector } from '../state/router/router.selectors';
import { tap } from 'rxjs/operators';
import { loadSmartcard } from '../state/smartcard/smartcard.actions';

@Injectable({
  providedIn: 'root',
})
export class SmartcardLoadedGuard implements CanActivate {
  constructor(private store: Store<CoreModuleState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.select(getRouterParamSelector('code')).subscribe((code) => {
      this.store.dispatch(loadSmartcard({ code }));
    });
    return this.checkStore();
  }

  private checkStore() {
    return this.store.select(getSmartcardHistory).pipe(
      filter((smartcards) => !!smartcards),
      take(1),
      map(() => true)
    );
  }
}
