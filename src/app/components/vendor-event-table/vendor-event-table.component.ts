import { Component, Input, OnInit } from '@angular/core';
import { Deposit } from '../../models/deposit';
import { VendorEvent } from '../../models/vendor-event';

@Component({
  selector: 'app-vendor-event-table',
  templateUrl: './vendor-event-table.component.html',
  styleUrls: ['./vendor-event-table.component.scss'],
})
export class VendorEventTableComponent implements OnInit {
  @Input()
  events: VendorEvent[] = [];

  displayedColumns: string[] = [
    'subject',
    'action',
    'date',
    'purchaseId',
    'value',
  ];

  constructor() {}

  ngOnInit(): void {}
}
