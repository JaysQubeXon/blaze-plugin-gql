import {
  Notes,
  Address,
  Asset,
  Tracked,
  TerminalLocation,
  Terminal,
  Doctor,
  BlazeMember,
  EmployeeOnFleetInfoList,
  Role,
  BlazeCart
} from "./";

export interface BlazeTransaction extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  metrcId: number;
  metrcSaleTime: string;
  traceSubmitStatus: "None" | string;
  transNo: string;
  parentTransactionId: string;
  priority: number;
  createdById: string;
  sellerId: string;
  memberId: string;
  terminalId: string;
  sellerTerminalId: string;
  overrideInventoryId: string;
  checkinTime: number;
  startTime: number;
  endTime: number;
  active: boolean;
  queueType: "WalkIn" | string;
  status: "Queued" | string;
  note: Notes;
  memo: string;
  deleteNote: Notes;
  cart: BlazeCart;
  processedTime: number;
  loc: number[];
  transType: "Sale" | string;
  assignedEmployeeId: string;
  timeZone: string;
  deliveryAddress: Address;
  locked: boolean;
  hypurPin: string;
  hypurCheckinISN: string;
  entityISN: string;
  fulfillmentStep: "Prepare" | string;
  checkoutType: "Direct" | string;
  startRouteDate: number;
  routing: boolean;
  startRouteLocation: number[];
  endRouteDate: number;
  endRouteLocation: number[];
  pointsEarned: number;
  memberSignature: Asset;
  transferShopId: string;
  transferRequest: TransferRequest;
  consumerCartId: string;
  source: string;
  eta: number;
  trackingStatus: "NotStarted" | string;
  mileageCalculated: boolean;
  mileage: number;
  member: BlazeMember;
  seller: Seller;
  sellerTerminal: Terminal;
  assignedEmployee: AssignedEmployee;
  preparedBy: string;
  preparedDate: number;
  pickUpDate: number;
  onFleetTaskId: string;
  createOnfleetTask: boolean;
  state: number;
  shortId: string;
  onFleetTaskStatus: "TASK_ARRIVAL" | string;
  qbSalesReceiptRef: string;
  qbRefundReceipt: string;
  preparingFulfillment: boolean;
  fulfillingFulfillment: boolean;
}

export interface TransferRequest {
  fromShopId: string;
  toShopId: string;
  transfers: Transfer[];
}

export interface Transfer {
  productId: string;
  fromInventoryId: string;
  fromBatchId: string;
  toInventoryId: string;
  toBatchId: string;
  prepackageItemId: string;
  transferAmount: number;
}

export interface Seller extends Tracked {
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
  appAccessList: "Retail" | string[];
}

export interface TimeCard extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  employeeId: string;
  clockInTime: number;
  clockOutTime: number;
  clockin: boolean;
  sessions: Sessions[];
}

export interface Sessions extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  terminalId: string;
  employeeId: string;
  timeCardId: string;
  startTime: number;
  endTime: number;
}

export interface AssignedEmployee extends Tracked {
  id: string;
  created: number;
  modified: number;
  deleted: boolean;
  updated: boolean;
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
  appAccessList: "Retail" | string[];
}
