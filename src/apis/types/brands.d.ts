import { BlazeVendor, Tracked, Asset } from "./";

export interface Brand extends Tracked {
  companyId: string;
  name: string;
  active: boolean;
  website: string;
  phoneNo: string;
  brandLogo: Asset;
  vendorList: string[];
  vendors: BlazeVendor[];
}
