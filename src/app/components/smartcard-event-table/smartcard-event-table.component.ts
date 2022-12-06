import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SmartcardEvent } from '../../models/smartcard-event';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-smartcard-event-table',
  templateUrl: './smartcard-event-table.component.html',
  styleUrls: ['./smartcard-event-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartcardEventTableComponent implements OnInit, AfterViewInit {
  @Input()
  set events(events: SmartcardEvent[]) {
    this.dataSource.data = events;
  }

  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<SmartcardEvent> =
    new MatTableDataSource<SmartcardEvent>();

  displayedColumns: string[] = [
    'subject',
    'action',
    'date',
    'depositId',
    'value',
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
