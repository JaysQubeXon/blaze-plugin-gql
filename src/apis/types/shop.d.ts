import { Asset, TaxTable, Address, TaxInfo, Tracked } from "./";

export interface ShopResponse {
  shop: BlazeShop;
  contract: ShopContract;
  toleranceMap: ShopToleranceMap;
  companyLogoURL: string;
}

export interface BlazeShop extends Tracked {
  companyId: string;
  shortIdentifier: string;
  name: string;
  shopType: "Medicinal" | "Both";
  address: Address;
  phoneNumber: string;
  emailAdress: string;
  license: string;
  enableDeliveryFee: boolean;
  deliveryFee: number;
  taxOrder: "PostTaxed";
  taxInfo: TaxInfo;
  showWalkInQueue: boolean;
  showDeliveryQueue: boolean;
  showOnlineQueue: boolean;
  enableCashInOut: boolean;
  timeZone: string;
  latitude: number;
  longitude: number;
  active: boolean;
  snapshopTime: number;
  defaultCountry: string;
  onlineStoreInfo: OnlineStoreInfo;
  deliveryFees: ShopDeliveryFees[];
  enableSaleLogout: boolean;
  assets: Asset[];
  enableBCCReceipt: boolean;
  bccEmailAddress: string;
  enableGPSTracking: boolean;
  receivingInventoryId: string;
  defaultPinTimeout: number;
  showSpecialQueue: boolean;
  emailList: string[];
  enableLowInventoryEmail: boolean;
  restrictedViews: boolean;
  emailMessage: string;
  taxRoundOffType: "ONE_CENT" | "FIVE_CENT";
  enforceCashDrawers: boolean;
  useAssignedEmployee: boolean;
  showProductByAvailableQuantity: boolean;
  autoCashDrawer: boolean;
  numAllowActiveTrans: number;
  requireValidRecDate: boolean;
  enableDeliverySignature: boolean;
  restrictIncomingOrderNotifications: boolean;
  restrictedNotificationTerminals: string[];
  roundOffType: "NONE";
  roundUpMessage: string;
  membersCountSyncDate: number;
  enableCannabisLimit: boolean;
  useComplexTax: boolean;
  taxTables: TaxTable[];
  enableExciseTax: boolean;
  exciseTaxType: "PER_ITEM";
  nalExciseFromRetailCost: boolean;
  alExciseOnZeroPrice: boolean;
  marketingSources: string[];
  productsTag: string[];
  logo: ShopLogo;
  hubId: string;
  hubName: string;
  enableOnFleet: boolean;
  onFleetApiKey: string;
  onFleetOrganizationId: string;
  onFleetOrganizationName: string;
  emailAttachment: ShopEmailAttachment;
  receiptInfo: ShopReceiptInfo[];
  enablePinForCashDrawer: boolean;
  enableWooCommerce: boolean;
  cartMinimums: ShopCartMinimums;
  creditCardFeeList: ShopCreditCardFeeList[];
  appTarget: "Retail";
  twilioNumber: number;
  enableAgeLimit: boolean;
  ageLimit: number;
  medicinalAge: number;
  enableMedicinalAge: boolean;
  deliveryRefundType: "NONE";
  creditFefundType: "NONE";
  enableSpringBig: boolean;
  enableDailySummaryEmail: boolean;
  enableHarvestTax: boolean;
  enableTookan: boolean;
  legalLanguage: string;
  orderTags: string[];
  allowAnonymousOrders: boolean;
  membersTag: string[];
  productPriceIncludeExciseTax: boolean;
  checkoutType: "Direct";
  timezoneOffsetInMinutes: number;
  defaultPinTimeoutDuration?: number; // not in example object, maybe depracated?
}

export interface ShopToleranceMap {
  HALF: ToleranceMapItem;
  THREE_GRAMS: ToleranceMapItem;
  QUARTER: ToleranceMapItem;
  ONE_EIGHTTH: ToleranceMapItem;
  GRAM: ToleranceMapItem;
  HALF_GRAM: ToleranceMapItem;
  TWO_GRAMS: ToleranceMapItem;
  OUNCE: ToleranceMapItem;
}

export interface ToleranceMapItem extends Tracked {
  companyId: string;
  name: string;
  startWeight: number;
  endWeight: number;
  priority: number;
  unitValue: number;
  weightValue: number;
  weightKey: string;
  enabled: boolean;
}

export interface ShopCreditCardFeeList extends Tracked {
  companyId: string;
  enabled: boolean;
  fee: number;
  subTotalThreshold: number;
  type: "Percentage" | "Cash";
}

export interface ShopCartMinimums extends Tracked {
  companyId: string;
  minimumsType: "SIMPLE";
  cartMinimumDetails: ShopCartMinimumDetails[];
}

export interface ShopCartMinimumDetails {
  minimum: number;
  zipCodes: string[];
  distance: number;
  enabled: boolean;
}

export interface ShopReceiptInfo extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  receiptType: "SALES" | "FULFILLMENT";
  enableMemberName: boolean;
  enableMemberId: boolean;
  enableMemberAddress: boolean;
  enableShopAddress: boolean;
  enableShopPhoneNo: boolean;
  enableIncludeItemInSKU: boolean;
  enableExciseTaxAsItem: boolean;
  enableMemberLoyaltyPoints: boolean;
  enableNotes: boolean;
  freeText: string;
  enabledFreeText: boolean;
  enabledBottomFreeText: boolean;
  aboveFreeText: string;
  enableEmployeeName: boolean;
}

export interface ShopContract extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  name: string;
  active: boolean;
  text: string;
  version: number;
  required: boolean;
  pdfFile: ShopPDFFile;
  enableWitnessSignature: boolean;
  enableEmployeeSignature: boolean;
  contentType: "TEXT";
}

export interface ShopLogo extends Asset {}
export interface ShopPDFFile extends Asset {}
export interface ShopEmailAttachment extends Asset {}

export interface ShopDeliveryFees extends Tracked {
  companyId: string;
  enabled: boolean;
  subTotalThreshold: number;
  fee: number;
  feeType: "CART_SUB_TOTAL";
  zipCodes: string[];
  distance: number;
  type: "Cash" | "Percentage";
}

export interface OnlineStoreInfo extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  enableStorePickup: boolean;
  enableDelivery: boolean;
  enableOnlineShipment: boolean;
  enableProductReviews: boolean;
  colorTheme: "Light" | "Dark";
  defaultETA: number;
  pageOneMessageTitle: string;
  pageOneMessageBody: string;
  submissionMessage: string;
  cartMinimum: number;
  cartMinType: "Subtotal";
  enabled: boolean;
  websiteOrigins: string;
  supportEmail: string;
  enableOnlinePOS: boolean;
  enableDeliveryAreaRestrictions: boolean;
  restrictedZipCodes: string[];
  useCustomETA: boolean;
  enableETA?: boolean;
  customMessageETA: string;
  storeHexColor: string;
  viewType: "List";
  enableInventory: boolean;
  enableInventoryType: "All";
  activeInventoryId: string;
  enableHtmlText: boolean;
  htmlText: string;
  websiteUrl: string;
  enableOtherMarketingSource: boolean;
}
