import { Doctor, Asset, Notes, Tracked, Address } from "./";

export interface BlazeMember extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  firstName: string;
  lastName: string;
  middleName: string;
  address: Address;
  email: string;
  dob: number;
  primaryPhone: string;
  textOptIn: boolean;
  emailOptIn: boolean;
  medical: boolean;
  searchText: string;
  sex: "MALE" | string;
  status: "Active" | string;
  notes: Notes[];
  contracts: Contract[];
  preferences: Preference[];
  identifications: Identifications[];
  recommendations: Recommendation[];
  lastVisitDate: number;
  startDate: number;
  importId: string;
  memberGroupId: string;
  memberGroup: MemberGroup;
  recentProducts: string[];
  dlExpired: boolean;
  recommendationExpired: boolean;
  agreementExpired: boolean;
  emailVerified: boolean;
  consumerUserId: string;
  marketingSource: string;
  consumerType: "Other" | string;
  enableLoyalty: boolean;
  loyaltyPoints: number;
  lifetimePoints: number;
  enabledCareGiver: boolean;
  careGivers: string[];
  addresses: Address[];
  qbCustomerRef: {}[];
  banPatient: boolean;
  enabledCannabisLimit: boolean;
  expStatuses: string[];
}

export interface Contract extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  contractId: string;
  membershipId: string;
  signedDate: number;
  signaturePhoto: Asset;
  signedDigitally: boolean;
  consumerId: string;
  memberName: string;
  employeeName: string;
  employeeSignaturePhoto: Asset;
  witnessName: string;
  witnessSignaturePhoto: Asset;
}

export interface Preference extends Tracked {
  companyId: string;
  name: string;
}

export interface Identifications extends Tracked {
  companyId: string;
  licenseNumber: string;
  expirationDate: number;
  frontPhoto: Asset;
  assets: Asset[];
  state: string;
  type: "Drivers" | string;
}

export interface Recommendation extends Tracked {
  companyId: string;
  recommendationNumber: string;
  verifyWebsite: string;
  verifyPhoneNumber: string;
  state: string;
  issueDate: number;
  expirationDate: number;
  frontPhoto: Asset;
  assets: Asset[];
  doctorId: string;
  verified: boolean;
  verifyMethod: "DEFAULT" | string;
  doctor: Doctor;
}

export interface MemberGroup extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  name: string;
  discount: number;
  defaultGroup: boolean;
  active: boolean;
  memberCount: number;
  memberCountTextOptIn: number;
  memberCountEmailOptIn: number;
  discountType: "Cash" | string;
}

export interface MemberStatus extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  consumerId: string;
  memberId: string;
  accepted: boolean;
  acceptedDate: number;
  reason: string;
  lastSyncDate: number;
}
