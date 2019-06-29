
import {
  BlazeVendor,
  TaxTable,
  Notes,
  Asset,
  Tracked,
  TaxInfo,
  PotencyAmount,
  Quantities,
  PriceRange,
  Category,
  MedicalConditions,
  PriceBreak,
  Address
} from "./";
import { BlazeResponse } from "./responses.d";

export interface GetCategoryResponse extends Category {}

export interface GetCategoriesResponse
  extends BlazeResponse<GetCategoryResponse> {}

/**
 * SearchProducts endpoint response interface
 * This response type would be passed into BlzeResponse<BlazeProducts>
 * allowing this object to be on object in an array of values.
 */
export interface BlazeProduct extends Tracked {
  companyId: string;
  shopId: string;
  dirty: boolean;
  importId: any;
  importSrc: any;
  categoryId: string;
  sku: string;
  vendorId: string;
  productSaleType: string;
  name: string;
  description: string;
  flowerType: "Sativa" | "Hybrid" | "Indica";
  unitPrice: number;
  weightPerUnit: "EIGHTH" | "CUSTOM_GRAMS" | "EACH" | "FULL_GRAM" | "HALF_GRAM";
  unitValue: number;
  thc: number;
  cbn: number;
  cbd: number;
  cbda: number;
  thca: number;
  active: boolean;
  genetics: string;
  medicalConditions: MedicalConditions[];
  priceRanges: PriceRange[];
  priceBreaks: PriceBreak[];
  assets: Asset[];
  quantities: Quantities[];
  brandId: any;
  category: Category;
  notes: Notes[];
  enableMixMatch: boolean;
  enableWeedmap: boolean;
  showInWidget: boolean;
  taxType: string;
  taxOrder: string;
  customTaxInfo: TaxInfo;
  discountable: boolean;
  vendor: BlazeVendor;
  brand: any;
  lowThreshold: number;
  lowInventoryNotification: boolean;
  medicinal: boolean;
  byGram: boolean;
  byPrepackage: boolean;
  enableExciseTax: boolean;
  priceIncludesExcise: boolean;
  priceIncludesALExcise: boolean;
  cannabisType: string;
  potencyAmount: PotencyAmount;
  taxTables: TaxTable[];
  tags: string[];
  qbItemRef: any;
  qbDesktopItemRef: any;
  customWeight: number;
  automaticReOrder: boolean;
  reOrderLevel: number;
  customGramType: string;
  pricingTemplateId: string;
  productType: string;
  potency: boolean;
  companyLinkId: string;
}
