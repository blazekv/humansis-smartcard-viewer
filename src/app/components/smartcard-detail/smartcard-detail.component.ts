import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SmartcardBeneficiary } from '../../models/smartcardBeneficiary';
import { SmartcardEvent } from '../../models/smartcard-event';

@Component({
  selector: 'app-smartcard-detail',
  templateUrl: './smartcard-detail.component.html',
  styleUrls: ['./smartcard-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartcardDetailComponent implements OnInit {
  @Input()
  smartcard?: SmartcardBeneficiary;

  @Input()
  smartcardEvents: SmartcardEvent[] = [];

  constructor() {}

  ngOnInit(): void {}
}
