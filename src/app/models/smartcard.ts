import { Beneficiary } from './beneficiary';
import { Purchase } from './purchase';
import { Deposit } from './deposit';

export interface Smartcard {
  id: string;
  serial_number: string;
  beneficiary: Beneficiary;
  purchases: Purchase[];
  deposites: Deposit[];
  state: string;
  currency: string;
  suspicious: boolean;
  suspicious_reason: string;
  value: number;
  created_at: string;
  disabled_at: string;
  active: boolean;
  registered_at: string;
  changed_at: string;
}
