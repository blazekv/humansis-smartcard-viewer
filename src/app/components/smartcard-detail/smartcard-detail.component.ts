import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Smartcard } from '../../models/smartcard';

@Component({
  selector: 'app-smartcard-detail',
  templateUrl: './smartcard-detail.component.html',
  styleUrls: ['./smartcard-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartcardDetailComponent implements OnInit {
  @Input()
  smartcard?: Smartcard;

  constructor() {}

  ngOnInit(): void {}
}
