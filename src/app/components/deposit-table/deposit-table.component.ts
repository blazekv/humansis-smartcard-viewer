import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Deposit } from '../../models/deposit';

@Component({
  selector: 'app-deposit-table',
  templateUrl: './deposit-table.component.html',
  styleUrls: ['./deposit-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositTableComponent implements OnInit {
  @Input()
  deposits: Deposit[] = [];

  displayedColumns: string[] = [
    'id',
    'value',
    'distributed',
    'dateOfDistribution',
  ];

  constructor() {}

  ngOnInit(): void {}
}
