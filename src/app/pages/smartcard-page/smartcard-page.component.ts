import { Component, OnInit } from '@angular/core';
import { CoreModuleState } from '../../state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Smartcard } from '../../models/smartcard';
import { getSmartcard } from '../../state/smartcard/smartcard.selectors';

@Component({
  selector: 'app-smartcard-page',
  templateUrl: './smartcard-page.component.html',
  styleUrls: ['./smartcard-page.component.scss'],
})
export class SmartcardPageComponent implements OnInit {
  smartcard$: Observable<Smartcard | undefined> =
    this.store.select(getSmartcard);

  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}
}
