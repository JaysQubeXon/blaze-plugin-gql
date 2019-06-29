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

const APIs: APIHooks = {};
function hookUpAPI(service: AllowedAPIS) {
  shouldHookUpAPI(service) ? (APIs[service] = hookUpWith(service)) : null;
}

export const context: ContextFunction<express.Request, AppContext> = ({
  req
}: FunctionParams): ContextApollo<AppContext> => {
  const context: AppContext = { isAllowed: true };
  const { headers } = req;

  if (longStringExists(headers.authorization)) {
    context.keys.authorization = req.headers.authorization;
    if (longStringExists(headers.partner_key)) {
      context.keys.partner_key = req.headers.partner_key;
    }
  }

  hookUpAPI("cart");

  context.apis = APIs;
  
  return context;
};
