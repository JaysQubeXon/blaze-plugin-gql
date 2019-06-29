import * as express from "express";
import { ContextFunction } from "apollo-server-core";
import {
  FunctionParams,
  ContextApollo,
  AppContext,
  APIHooks,
  AllowedAPIS
} from "./context.d";
import { apis } from "./load-config";
import { longStringExists, isNotNull } from "./utils";

const shouldHookUpAPI = (service: AllowedAPIS): boolean =>
  isNotNull(apis[service]) && apis[service].enable === true;

const hookUpWith = (service: AllowedAPIS) => apis[service];

export const context: ContextFunction<express.Request, AppContext> = ({
  req
}: FunctionParams): ContextApollo<AppContext> => {
  const { headers } = req;
  let keys: any;
  if (longStringExists(headers.authorization)) {
    keys.authorization = req.headers.authorization;
  } else {
    return { isAllowed: false };
  }

  if (longStringExists(headers.partner_key)) {
    keys.partner_key = req.headers.partner_key;
  }

  const apis: APIHooks = {};
  function hookUpAPI(service: AllowedAPIS) {
    shouldHookUpAPI(service) ? (apis[service] = hookUpWith(service)) : null;
  }
  hookUpAPI("cart");

  return {
    keys,
    db: null,
    isAllowed: true
  };
};
