export interface Beneficiary {
  id: number;
  householdId: number;
  enParentsName?: string;
  gender: string;
  nationalIds: [];
  phoneIds: [];
  residencyStatus: string;
  referralType?: string;
  referralComment?: string;
  isHead: boolean;
  vulnerabilityCriteria: string[];
  dateOfBirth: string;
  localFamilyName: string;
  localGivenName: string;
  localParentsName: string;
  enFamilyName: string;
  enGivenName: string;
}
