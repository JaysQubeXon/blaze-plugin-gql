import { Tracked, Notes, Address, TimeCard, TerminalLocation } from "./";

export interface Employee extends Tracked {
  companyId: string;
  firstName: string;
  lastName: string;
  pin: string;
  roleId: string;
  email: string;
  password: string;
  driversLicense: string;
  dlExpirationDate: string;
  vehicleMake: string;
  notes: Notes[];
  shops: string[];
  disabled: boolean;
  phoneNumber: string;
  assignedInventoryId: string;
  assignedTerminalId: string;
  address: Address;
  timecardId: string;
  timeCard: TimeCard;
  role: Role;
  canApplyCustomDiscount: boolean;
  insuranceExpireDate: number;
  insuranceCompanyName: string;
  policyNumber: string;
  registrationExpireDate: number;
  vehiclePin: string;
  vinNo: string;
  vehicleModel: string;
  vehicleLicensePlate: string;
  recentLocation: TerminalLocation;
  employeeOnFleetInfoList: EmployeeOnFleetInfoList[];
  appAccessList: "AuthenticationApp" | string[];
  tookanInfoList: tookanInfoList[];
  lastLoggedInShopId: string;
  terminalName: string;
  employeeOnFleetInfoResults: EmployeeOnFleetInfoResults[];
}

export interface Role extends Tracked {
  companyId: string;
  permissions: "None" | string[];
  name: string;
}

export interface EmployeeOnFleetInfoList {
  shopId: string;
  onFleetWorkerId: string;
  onFleetTeamList: string[];
}

export interface EmployeeOnFleetInfoResults extends EmployeeOnFleetInfoList {
  shopName?: string;
  employeeOnFleetTeams?: {} | unknown;
}

export interface tookanInfoList {
  shopId: string;
  tookanAgentId: string;
  status: "AVAILABLE" | string;
  teamId: string;
}
