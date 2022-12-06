import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SmartcardBeneficiary } from '../../models/smartcardBeneficiary';
import {
  getSmartcardEvents,
  getSmartcardHistory,
} from '../../state/smartcard/smartcard.selectors';
import { SmartcardEvent } from '../../models/smartcard-event';
import { getRouterParamSelector } from '../../state/router/router.selectors';

@Component({
  selector: 'app-smartcard-page',
  templateUrl: './smartcard-page.component.html',
  styleUrls: ['./smartcard-page.component.scss'],
})
export class SmartcardPageComponent implements OnInit {
  code$: Observable<string | undefined> = this.store.select(
    getRouterParamSelector('code')
  );

  smartcardHistory$: Observable<SmartcardBeneficiary[] | undefined> =
    this.store.select(getSmartcardHistory);

  smartcardEvents$: Observable<SmartcardEvent[] | undefined> =
    this.store.select(getSmartcardEvents);

  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}
}
