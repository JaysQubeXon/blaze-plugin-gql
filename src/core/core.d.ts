import {
  AppContext,
  AppContextKeys,
  AppContextKeysProps,
  AppContextProps
} from "../context.d";

export interface Headers {
  "Content-Type": "application/json";
  Authorization: string;
  partner_key?: string;
}

export interface ApiKeys {
  partner_key?: string;
  developer_key?: string;
  api_key?: string;
  useDeveloperKey?: boolean;
}

export type ApiKeysProps =
  | "api_key"
  | "developer_key"
  | "partner_key"
  | "useDeveloperKey";

export interface CoreState {
  accessType?: AccessTypes;
}

export type AccessTypes ="none" | "public" | "partner" | "developer";
