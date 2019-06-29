import { BlazeCart, Tracked } from "./";

export interface ActiveCartResponse extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  consumerId: string;
  memberId: string;
  cart: BlazeCart;
  orderPlacedTime: number;
  acceptedTime: number;
  packagedTime: number;
  onTheWayTime: number;
  completedTime: number;
  canceledTime?: number;
  declinedTime?: number;
  accepted: boolean;
  completed: boolean;
  packaged: boolean;
  onTheWay: boolean;
  eta: number;
  reason: string;
  sessionId: string;
  publicKey: string;
  cartStatus: CartStatusEnum;
  trackingStatus: TrackingStatusEnum;
  pickupType: PickupTypeEnum;
  source: string;
  transactionId: string;
  transNo: string;
  orderNo: string;
  employeeName: string;
  memo: any; // unsure what type it is
  pickUpDate: number;
  transactionSource: TransactionSourceEnum;
  assignedEmployeeId: string;
}

export type CartStatusEnum = "InProgress";
export type TrackingStatusEnum = "NotStarted";
export type PickupTypeEnum = "Pickup" | "Delivery";
export type TransactionSourceEnum = "Widget";
