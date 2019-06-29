import { Address, Tracked } from "./";

export interface SignedContract extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  contractId: string;
  membershipId: string;
  signedDate: number;
  signaturePhoto: Address;
  signedDigitally: boolean;
  consumerId: string;
  memberName: string;
  employeeName: string;
  employeeSignaturePhoto: Address;
  witnessName: string;
  witnessSignaturePhoto: Address;
}
