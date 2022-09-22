export interface Purchase {
  id: number;
  value: number;
  currency: string;
  beneficiaryId: number;
  dateOfPurchase: string;
}
