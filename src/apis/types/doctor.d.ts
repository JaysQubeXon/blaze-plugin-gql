import { Asset, Notes, Address, Tracked } from "./common.d";

export interface Doctor extends Tracked {
  companyId: string;
  importId: string;
  firstName: string;
  lastName: string;
  license: string;
  website: string;
  phoneNumber: string;
  email: string;
  fax: string;
  degree: string;
  state: string;
  searchText: string;
  address: Address;
  active: boolean;
  notes: Notes[];
  assets: Asset[];
}
