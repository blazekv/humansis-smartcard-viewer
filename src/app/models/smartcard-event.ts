import { Beneficiary } from './beneficiary';
import { Purchase } from './purchase';
import { Deposit } from './deposit';

export interface SmartcardEvent {
  subject: string;
  action: string;
  date: string;
  depositId?: number;
  smartcardId: number;
  smartcardSerialNumber: string;
  value: number;
}
