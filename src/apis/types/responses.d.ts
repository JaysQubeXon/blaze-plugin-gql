import { Errors, Payload } from "../../common.d";
import { GetOrderHistory, FindProductCostResult } from "../../apis/cart";
import { AxiosResponse } from "axios";
import { BlazeCart } from "./";

/**
 * BlazeResponse interface
 * Recieves a Response type as argument
 */
export interface BlazeResponse<T> {
  values?: T[];
  skip?: number;
  limit?: number;
  total?: number;
}

export type BlazeAxiosResponse<T> = AxiosResponse<BlazeResponse<T>>;
export type BlazeAxiosCart = BlazeAxiosResponse<BlazeCart>;

export interface GetOrderHistoryResponse extends Errors, BlazeResponse<BlazeCart> {}

export type Payloaded<T> = Promise<Payload<T>>;
export type CartPayload = Payloaded<BlazeCart>;
export type CartsPayload = Payloaded<BlazeCart[]>;
export type FindProductCostResultPayload = Payloaded<FindProductCostResult>;
export type AxiosCart = AxiosResponse<BlazeCart>;

export interface BlazeErrorResponse {
  field: string;
  message: string;
  errorType: string;
  references: any;
}
