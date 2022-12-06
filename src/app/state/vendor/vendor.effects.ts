import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { VendorService } from '../../services/vendor.service';
import {
  loadVendorEvents,
  loadVendorEventsFail,
  loadVendorEventsSuccess,
} from './vendor.actions';

@Injectable()
export class VendorEffects {
  constructor(
    private actions$: Actions,
    private vendorService: VendorService
  ) {}

  loadVendorEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadVendorEvents),
      switchMap(({ id }) => {
        return from(this.vendorService.getVendorEvents(id)).pipe(
          map((data) => loadVendorEventsSuccess({ data })),
          catchError((error: any) => of(loadVendorEventsFail({ error })))
        );
      })
    );
  });
}
