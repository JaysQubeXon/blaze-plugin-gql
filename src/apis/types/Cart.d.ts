import {
  BlazeProduct,
  Tracked,
  DiscountTypeEnum,
  ConsumerTypeEnum,
  PaymentOptionsEnum,
  TaxResults,
  DeliveryDiscountTypeEnum,
  PromotionReqs,
  PromotionReqsLogs,
  SplitPayment,
  PaymentTypeEnum,
  StorageLocationEnum,
  TaxOrderEnum,
  TaxInfo,
  TaxTypeEnum,
  TaxTable,
  StatusEnum,
  QuantityLogs,
  Prepackage,
  PrepackageProductItem
} from "./";

export interface BlazeCart extends Tracked {
  companyId: string;
  discount: number;
  discountType: DiscountTypeEnum;
  promoCode: string;
  consumerType: ConsumerTypeEnum;
  cashReceived: number;
  changeDue: number;
  paymentOption: PaymentOptionsEnum;
  subTotal: number;
  totalDiscount: number;
  calcCartDiscount: number;
  subTotalDiscount: number;
  total: number;
  taxTable: TaxTable;
  tax: number;
  taxResult: TaxResults;
  totalCalcTax: number;
  totalPreCalcTax: number;
  refundAmount: number;
  enableDeliveryFee: boolean;
  deliveryFee: number;
  deliveryDiscount: number;
  deliveryDiscountType: DeliveryDiscountTypeEnum;
  deliveryPromotionId: string;
  afterTaxDiscount: number;
  appliedAfterTaxDiscount: number;
  roundAmt: number;
  pointSpent: number;
  items: CartItem[];
  promotionReqs: PromotionReqs[];
  promotionReqLogs: PromotionReqsLogs[];
  splitPayment: SplitPayment;
  paymentType: PaymentTypeEnum;
  totalExciseTax?: number;
  totalALExciseTax?: number;
  balanceDue?: number;
  creditCardFee?: number;
  enableCreditCardFee?: boolean;
  refundOption?: "Void";
  refundOrderItemRequests: RefundOrderItemRequests[];
  storageLocation: StorageLocationEnum;
}

export interface RefundOrderItemRequests {
  orderItemId: string;
  quantity: number;
}

export interface CartItem extends Tracked {
  companyId: string;
  orderItemId: string;
  quantity: number;
  origQuantity: number;
  discountedQty: number;
  remarks: string;
  productId: string;
  cost: number;
  unitPrice: number;
  discount: number;
  discountType: DiscountTypeEnum;
  calcDiscount: number;
  finalPrice: number;
  calcTax: number;
  taxOrder: TaxOrderEnum;
  taxInfo: TaxInfo;
  taxType: TaxTypeEnum;
  taxTable: TaxTable;
  calcPreTax: number;
  status: StatusEnum;
  quantityLogs: QuantityLogs[];
  mixMatched: boolean;
  ignoreMixMatch: boolean;
  promotionReqs: PromotionReqs[];
  prepackageItemId: string;
  batchId: string;
  prepackage: Prepackage;
  prepackageProductItem: PrepackageProductItem;
  product: BlazeProduct;
  preparedQty: number;
  fulfilled: boolean;
}

export interface CartResponse extends Tracked {
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
  accepted: boolean;
  completed: boolean;
  packaged: boolean;
  onTheWay: boolean;
  eta: number;
  reason: string;
  sessionId: string;
  publicKey: string;
  cartStatus: "InProgress";
  trackingStatus: "NotStarted";
  pickupType: "Pickup";
  source: string;
  transactionId: string;
  transNo: string;
  orderNo: string;
  employeeName: string;
  memo?: string;
  pickUpDate?: number;
  transactionSource?: "Retail";
  assignedEmployeeId?: string;
}

export interface SubmitCart {
  pickupType: "Delivery" | "Pickup";
  consumerId: string;
  cart: BlazeCartItems[];
}

interface BlazeCartItems {
  items: BlazeCartItem[];
}

export interface BlazeCartItem {
  productId: string;
  quantity: number;
}
