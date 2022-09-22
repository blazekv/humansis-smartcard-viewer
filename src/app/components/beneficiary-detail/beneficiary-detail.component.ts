import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Beneficiary } from '../../models/beneficiary';

@Component({
  selector: 'app-beneficiary-detail',
  templateUrl: './beneficiary-detail.component.html',
  styleUrls: ['./beneficiary-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeneficiaryDetailComponent implements OnInit {
  @Input()
  beneficiary?: Beneficiary;

  constructor() {}

  ngOnInit(): void {}
}
