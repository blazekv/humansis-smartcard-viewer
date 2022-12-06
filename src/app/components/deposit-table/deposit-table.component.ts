import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Deposit } from '../../models/deposit';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-deposit-table',
  templateUrl: './deposit-table.component.html',
  styleUrls: ['./deposit-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositTableComponent implements OnInit, AfterViewInit {
  @Input()
  set deposits(deposits: Deposit[]) {
    this.dataSource.data = deposits;
  }

  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<Deposit> = new MatTableDataSource<Deposit>();

  displayedColumns: string[] = [
    'id',
    'value',
    'distributed',
    'dateOfDistribution',
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
