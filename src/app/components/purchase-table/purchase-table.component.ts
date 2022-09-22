import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from '../../models/purchase';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.scss'],
})
export class PurchaseTableComponent implements OnInit {
  @Input()
  purchases: Purchase[] = [];

  displayedColumns: string[] = [
    'id',
    'value',
    'beneficiaryId',
    'dateOfPurchase',
  ];

  constructor() {}

  ngOnInit(): void {}
}
