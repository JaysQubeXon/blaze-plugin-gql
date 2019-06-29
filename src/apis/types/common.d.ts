import { Error } from "../../common.d";

export interface Tracked {
  id: string;
  created: number;
  modified: number;
  deleted: boolean;
  updated: boolean;
}

export type AssetTypeEnum = "Document" | "Photo";

export interface Asset extends Tracked {
  companyId: string;
  name: string;
  key: string;
  type: AssetTypeEnum;
  publicURL: string;
  active: boolean;
  priority: number;
  secured: boolean;
  thumbURL: string;
  mediumURL: string;
  largeURL: string;
  assetType: AssetTypeEnum;
  largeX2URL: string;
  origURL: string;
}

export interface TaxTable extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  name: string;
  active: boolean;
  taxType: TaxTypeEnum;
  taxOrder: TaxOrderEnum;
  consumerType: ConsumerTypeEnum;
  cityTax: TerritoryTax;
  countyTax: TerritoryTax;
  stateTax: TerritoryTax;
  federalTax: TerritoryTax;
}

export type TerritoryEnum = "Default" | "City" | "County" | "State" | "Federal";

export interface TerritoryTax extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  taxRate: number;
  compound: boolean;
  active: boolean;
  territory: TerritoryEnum;
  activeExciseTax: boolean;
  taxOrder: TaxOrderEnum;
}

export interface PromotionReqs extends Tracked {
  companyId: string;
  promotionId: string;
  rewardId: string;
}

export interface PromotionReqsLogs extends PromotionReqs {
  amount: number;
}

export interface MedicalConditions extends Tracked {
  name: string;
}

export interface Quantities extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  inventoryId: string;
  quantity: number;
}

export interface QuantityLogs {
  id: string;
  inventoryId: string;
  quantity: number;
  prepackageItemId: string;
  batchId: string;
}

export interface WeightTolerance extends Tracked {
  companyId: string;
  name: string;
  startWeight: number;
  endWeight: number;
  priority: number;
  unitValue: number;
  weightValue: number;
  weightKey: "UNIT";
  enabled: boolean;
}

export interface Category extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  name:
    | "Topicals"
    | "Preroll"
    | "Flowers"
    | "Wax"
    | "CO2 Oil"
    | "Vape Pens"
    | "Edibles"
    | "Accessories";
  cannabis: boolean;
  photo: Asset;
  unitType: "units";
  active: boolean;
  priority: number;
  lowThreshold: number;
}

export interface Notes extends Tracked {
  writerId: string;
  writerName: string;
  message: string;
  enableOnFleet?: boolean;
}

export interface TaxInfo extends Tracked {
  cityTax: number;
  stateTax: number;
  federalTax: number;
}

export interface TaxResults extends Tracked {
  totalPreCalcTax: number;
  totalPostCalcTax: number;
  totalCityTax: number;
  totalCountyTax: number;
  totalStateTax: number;
  totalFedTax: number;
  totalCityPreTax?: number;
  totalCountyPreTax?: number;
  totalStatePreTax?: number;
  totalFedPreTax?: number;
  totalExciseTax?: number;
  totalNALPreExciseTax?: number;
  totalALExciseTax?: number;
  totalALPostExciseTax?: number;
  cultivationTaxResult: CultivateTaxResult;
}

export interface CultivateTaxResult {
  totalFlowerTax: number;
  totalLeafTax: number;
  totalFlowerOz: number;
  totalLeafOz: number;
  totalCultivationTax: number;
  leafTaxOz: number;
  flowerTaxOz: number;
}

export interface Address extends Tracked {
  companyId: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Prepackage extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  customWeight: boolean;
  toleranceId: string;
  productId: string;
  active: boolean;
  unitValue: number;
  price: number;
  name: string;
}

export interface PrepackageProductItem extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  productId: string;
  batchId: string;
  batchSKU: string;
  prepackageId: string;
  sku: string;
  active: boolean;
}

export interface Photo extends Tracked {
  name: string;
  key: string;
  type: "Photo";
  active: boolean;
  assetType: "Photo";
}

export type DlPhoto = Photo;
export type RecPhoto = Photo;

export type ProductSaleTypeEnum = "Medicinal";
export type WeightPerUnitEnum = "EACH" | "HALF_GRAM" | "FULL_GRAM";

export interface PriceRange {
  id: string;
  weightToleranceId: string;
  price: number;
  priority: number;
  weightTolerance: WeightTolerance;
}

export type PriceBreakType =
  | "None"
  | "HalfGramUnit"
  | "OneGramUnit"
  | "TwoGramUnits"
  | "ThreeGramUnits"
  | "FourGramUnits"
  | "FiveGramUnits"
  | "SixGramUnits"
  | "SevenGramUnits"
  | "EightGramUnits"
  | "NineGramUnits";

export interface PriceBreak extends Tracked {
  companyId: string;
  priceBreakType: PriceBreakType;
  name: string;
  price: number;
  quantity: number;
  active: boolean;
  priority: number;
  displayName: string;
}

export interface SplitPayment extends Tracked {
  companyId: string;
  cashAmt: number;
  creditDebitAmt: number;
  checkAmt: number;
}

export type PaymentOptionsEnum = "Cash" | "None";
export type ConsumerTypeEnum =
  | "Other"
  | "AdultUse"
  | "MedicinalState"
  | "MedicinalThirdParty";
export type PaymentTypeEnum = "Full";
export type DeliveryDiscountTypeEnum = "Cash";
export type DiscountTypeEnum = "Cash";
export type StorageLocationEnum = "CashVault" | "CashDrawer";

export type TaxOrderEnum = "PostTaxed";
export type TaxTypeEnum = "Default" | "Custom";
export type StatusEnum = "Active";

export interface PotencyAmount {
  thc: number;
  cbd: number;
  cbn: number;
  thca: number;
  cbda: number;
}

export interface SearchRange<T> {
  start?: T;
  limit?: T;
}
