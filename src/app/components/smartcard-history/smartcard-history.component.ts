import { Component, Input, OnInit } from '@angular/core';
import { SmartcardBeneficiary } from '../../models/smartcardBeneficiary';
import { SmartcardEvent } from '../../models/smartcard-event';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-smartcard-history',
  templateUrl: './smartcard-history.component.html',
  styleUrls: ['./smartcard-history.component.scss'],
})
export class SmartcardHistoryComponent implements OnInit {
  @Input()
  smartcardsHistory?: SmartcardBeneficiary[];

  @Input()
  smartcardEvents: SmartcardEvent[] = [];

  selected?: SmartcardBeneficiary;

  constructor() {}

  ngOnInit(): void {}

  select(event: MatSelectChange) {
    this.selected = event.value;
  }
}
