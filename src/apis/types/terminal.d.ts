import { Tracked } from "./";

export interface Terminal extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  active: boolean;
  deviceId: string;
  name: string;
  deviceModel: string;
  deviceVersion: string;
  deviceName: string;
  appVersion: string;
  deviceToken: string;
  deviceType: string;
  assignedInventoryId: string;
  cvAccountId: string;
  currentEmployeeId: string;
  terminalType: "NotAssigned" | string;
  creditCardReader: null;
  terminalLocations: TerminalLocation[];
}

export interface TerminalLocation extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  terminalId: string;
  employeeId: string;
  timeCardId: string;
  deviceId: string;
  name: string;
  loc: number[];
}
