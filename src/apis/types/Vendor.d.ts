import { Tracked, Notes, Address, Asset } from "./";

export interface BlazeVendor extends Tracked {
  companyId: string;
  importId: string;
  active: boolean;
  name: string;
  phone: string;
  email: string;
  fax: string;
  address: Address;
  description: string;
  website: string;
  firstName: string;
  lastName: string;
  notes: Notes[];
  licenseNumber: string;
  assets: Asset[];
  backOrderEnabled: boolean;
  licenseExpirationDate: number;
  armsLengthType: "ARMS_LENGTH" | string;
  brands: string[];
  qbVendorRef: unknown[];
  qbDesktopRef: string;
  companyType: "DISTRIBUTOR" | string;
  additionalAddressList: Address[];
  credits: number;
  mobileNumber: number;
  licenceType: "RECREATIONAL" | string;
  relatedEntity: boolean;
  vendorType: "CUSTOMER" | string;
  dbaName: string;
  vendorKey: string;
}

export interface VendorAddRequest {
  importId: string;
  active: boolean;
  name: string;
  medical: boolean;
  phone: string;
  email: string;
  website: string;
  fax: string;
  address: Address;
  description: string;
  contactFirstName: string;
  contactLastName: string;
  licenseNumber: string;
  firstName: string;
  lastName: string;
  assets: Asset[];
  licenseExpirationDate: number;
  armsLengthType: "ARMS_LENGTH";
  brands: string[];
  companyType: "DISTRIBUTOR";
  additionalAddressList: Address[];
  licenceType: "RECREATIONAL";
  relatedEntity: boolean;
  mobileNumber: string;
  notes: Notes[];
  vendorType: "CUSTOMER";
  dbaName: string;
}
