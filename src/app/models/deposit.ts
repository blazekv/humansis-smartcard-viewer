export interface Deposit {
  id: number;
  value: number;
  currency: string;
  smartcard: string;
  depositorId: number;
  distributed: boolean;
  dateOfDistribution: string;
}
