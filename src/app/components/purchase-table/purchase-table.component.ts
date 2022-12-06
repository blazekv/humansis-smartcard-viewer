import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Purchase } from '../../models/purchase';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.scss'],
})
export class PurchaseTableComponent implements OnInit, AfterViewInit {
  @Input()
  set purchases(purchases: Purchase[]) {
    this.dataSource.data = purchases;
  }

  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<Purchase> = new MatTableDataSource<Purchase>();

  displayedColumns: string[] = [
    'id',
    'value',
    'beneficiaryId',
    'dateOfPurchase',
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
