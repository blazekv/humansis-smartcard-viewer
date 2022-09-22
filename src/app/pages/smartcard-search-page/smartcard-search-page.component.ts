import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreModuleState } from '../../state';
import { loadSmartcard } from '../../state/smartcard/smartcard.actions';

@Component({
  selector: 'app-smartcard-search-page',
  templateUrl: './smartcard-search-page.component.html',
  styleUrls: ['./smartcard-search-page.component.scss'],
})
export class SmartcardSearchPageComponent implements OnInit {
  constructor(private store: Store<CoreModuleState>) {}

  ngOnInit(): void {}

  loadSmartcard(code: string) {
    this.store.dispatch(loadSmartcard({ code }));
  }
}
