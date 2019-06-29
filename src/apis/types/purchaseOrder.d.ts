import { Tracked, Asset, TaxResults } from "./";

export interface PurchaseOrderRequest {
  vendorId: string;
  notes: string;
  poPaymentTerms: string;
  paymentType: string;
  poProductAddRequestList: PoProductAddRequestList[];
  customTermDate: number;
  reference: string;
  transactionType: "ARMS_LENGTH" | string;
  discount: number;
  fees: number;
  customerType: "VENDOR" | string;
  deliveryAddress: string;
  deliveryTime: number;
  deliveryDate: number;
  termsAndCondition: string;
  flowerSourceType: "CULTIVATOR_DIRECT" | string;
  purchaseOrderDate: number;
  currentEmployeeId: string;
}

export interface PoProductAddRequestList {
  productId: string;
  requestQuantity: number;
  notes: string;
  totalCost: number;
}

export interface PurchaseOrder extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  poNumber: string;
  parentPOId: string;
  parentPONumber: string;
  approvedDate: number;
  approvedBy: string;
  approvedSignature: Asset;
  poPaymentTerms: "NET_3number" | string;
  purchaseOrderStatus: "InProgress" | string;
  poPaymentOptions: "CASH" | string;
  companyAssetList: Asset[];
  poProductRequestList: PoProductRequestList[];
  vendorId: string;
  receivedDate: number;
  deliveredBy: string;
  receivedByEmployeeId: string;
  createdByEmployeeId: string;
  completedByEmployeeId: string;
  poType: "Normal" | string;
  completedDate: number;
  notes: string;
  declineReason: string;
  declineDate: number;
  totalCost: number;
  amountPaid: number;
  submitForApprovalDate: number;
  archive: boolean;
  archiveDate: number;
  customTermDate: number;
  managerReceiveSignature: Asset;
  reference: string;
  qbPurchaseOrderRef: string;
  grandTotal: number;
  totalTax: number;
  totalPreCalcTax: number;
  totalCalcTax: number;
  taxResult: TaxResults;
  transactionType: "ARMS_LENGTH" | string;
  customerType: "VENDOR" | string;
  deliveryAddress: string;
  deliveryTime: number;
  deliveryDate: number;
  termsAndCondition: string;
  deliveryCharge: number;
  enableDeliveryCharge: boolean;
  poQrCodeAsset: Asset;
  poQrCodeUrl: string;
  flowerSourceType: "CULTIVATOR_DIRECT" | string;
  shipmentBillId: string;
  discount: number;
  fees: number;
  purchaseOrderDate: number;
  dueDate: number;
  podueDate: number;
}

export interface PoProductRequestList extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  productId: string;
  productName: string;
  requestStatus: "PENDING" | string;
  requestQuantity: number;
  receivedQuantity: number;
  trackTraceSystem: "MANUAL" | string;
  trackingPackagesList: TrackingPackagesList[];
  notes: string;
  unitPrice: number;
  totalCost: number;
  exciseTax: number;
  totalExciseTax: number;
  totalCultivationTax: number;
  declineReason: string;
  batchQuantityMap: {};
  receiveBatchStatus: "RECEIVED" | string;
  batchAddDetails: BatchAddDetails[];
}

export interface TrackingPackagesList extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  quantity: number;
  packageLabel: string;
  batchSku: string;
  referenceNo: string;
  dateSent: number;
  testingCompanyId: string;
  trackHarvestBatchId: string;
  trackHarvestBatchDate: string;
}

export interface BatchAddDetails {
  batchSku: string;
  quantity: number;
  testId: string;
  testingCompanyId: string;
  dateSent: number;
  trackHarvestBatchId: string;
  trackHarvestBatchDate: string;
}
