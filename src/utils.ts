import {
  AppContextKeysProps,
  AppContextKeys,
  AppContext,
  AppContextProps
} from "./context.d";
import { ApiKeysProps, ApiKeys } from "./core/core";

export const isNotNull = (v: any): boolean => v !== null;

export const isString = (v: any): boolean => isNotNull(v) && typeof v === "string";
export const isNotString = (v: any): boolean => isNotNull(v) && typeof v !== "string";

export const longStringExists = (v: any): boolean => isNotNull(v) && isString(v) && lengthGT0(v);
export const isEmptyString = (v: any): boolean => isNotNull(v) && isString(v) && lengthEQ0(v);

export const isNumber = (v: any): boolean => isNotNull(v) && typeof v === "number";
export const isNotNumber = (v: any): boolean => isNotNull(v) && typeof v !== "number";

export const isObject = (v: any): boolean => typeof isNotNull(v) && v === "object";
export const isNotObject = (v: any): boolean => isNotNull(v) && typeof v !== "object";

export const isFunction = (v: any): boolean => isNotNull(v) && typeof v === "function";
export const isNotFunction = (v: any): boolean => isNotNull(v) && typeof v !== "function";

export const isBoolean = (v: any): boolean => isNotNull(v) && typeof v === "boolean";
export const isNotBoolean = (v: any): boolean => isNotNull(v) && typeof v !== "boolean";

export const isUndefined = (v: any): boolean => isNotNull(v) && typeof v === "undefined";
export const isNotUndefined = (v: any): boolean => isNotNull(v) && typeof v !== "undefined";

export const lengthGT0 = (v: any): boolean => isNotNull(v) && v.length > 0;
export const lengthEQ0 = (v: any): boolean => isNotNull(v) && v.length === 0;

export const isPropOnObject = (
  prop: ApiKeysProps | AppContextProps | AppContextKeysProps,
  object: ApiKeys | AppContext | AppContextKeys
): boolean => isObject(object) && isString(prop) && object.hasOwnProperty(prop);
