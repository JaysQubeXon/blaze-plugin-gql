import * as express from "express";
import { ValueOrPromise } from "apollo-server-plugin-base";
import { Context, ContextFunction } from "apollo-server-core";
import { GetOrderHistoryResponse } from "./apis/types/responses";
import { CallbackFunc } from "./apis/cart";

export interface AppContext {
  keys?: AppContextKeys;
  db?: any;
  isAllowed: boolean;
  apis?: APIHooks;
}

export interface AppContextKeys {
  partner_key?: string;
  authorization: string;
}

export interface APIConfigs {
  api_key?: string;
  developer_key?: string;
  partner_key?: string;
  apis?: APIHooks;
}

export interface APIHooks {
  cart?: CartAPIHook;
  transaction?: any;
}

export interface CartAPIHook {
  enable: boolean;
  actions: CartAPIActions;
}

export interface CartAPIActions {
  getOrderHistory?: CallbackFunc<GetOrderHistoryResponse, void>;
  getActiveCart?: () => Promise<void>;
  updateCart?: () => Promise<void>;
  submitCart?: () => Promise<void>;
}

export type AllowedAPIS = "cart" | "transaction";

export type AppContextProps = "keys" | "db" | "isAllowed";
export type AppContextKeysProps = "partner_key" | "authorization";

export type ContextApollo<T> = ValueOrPromise<Context<T>>;
export type FunctionParams = { req: express.Request } | any;
