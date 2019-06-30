import { AppContext } from "../../context.d";
import { GetOrderHistory, UpdateCart, GetActiveCart } from "../../apis/cart";
import { GraphQLResolveInfo } from "graphql";
import { CartAPI, AuthAPI } from "../../apis";
import enums from "./enums";
import {
  GetOrderHistoryResponse
} from "../../apis/types/responses.d";
import { isFunction } from "../../utils";
import { RegisterConsumerInput } from "../../apis/types";

export default {
  ...enums,
  Query: {
    getOrderHistory: async (
      _: any,
      args: GetOrderHistory,
      context: AppContext,
      info: GraphQLResolveInfo
    ): Promise<GetOrderHistoryResponse> => {
      const cartAPI = new CartAPI(context);
      if (cartAPI.hasErrors) return { errors: cartAPI.errors };

      if (isFunction(context.apis.cart.actions.getOrderHistory)) {
        const cb = context.apis.cart.actions.getOrderHistory;
        const response = await cartAPI.getOrderHistory(args, cb);
        console.log("what is errors:", cartAPI.errors);
        if (cartAPI.hasErrors) return { errors: cartAPI.errors };
        console.log("what is response", response);
        return { ...response };
      } else {
        const response = await cartAPI.getOrderHistory(args);
        if (cartAPI.hasErrors) return { errors: cartAPI.errors };
        return { ...response };
      }
    },
    getActiveCart: async (
      _: any,
      { sessionID, cuid }: GetActiveCart,
      context: AppContext,
      info: GraphQLResolveInfo
    ) => {
      const cartAPI = new CartAPI(context);
      if (cartAPI.hasErrors) return { errors: cartAPI.errors };
      const { payload } = await cartAPI.getActiveCart({ sessionID, cuid });
    }
  },
  Mutation: {
    register: async (
      _: any,
      args: { consumer: RegisterConsumerInput },
      context: AppContext,
      info: GraphQLResolveInfo
    ) => {
      const authAPI = new AuthAPI(context);
      if (authAPI.hasErrors) return { errors: authAPI.errors };

      if (isFunction(context.apis.authentication.actions.register)) {
        const cb = context.apis.authentication.actions.register;
        const response = await authAPI.register(args, cb);
        if (authAPI.hasErrors) return { errors: authAPI.errors };
        return { ...response };
      } else {
        const response = await authAPI.register(args);
        if (authAPI.hasErrors) return { errors: authAPI.errors };
        return { ...response };
      }
    },
    updateCart: async (
      _: any,
      { id, cart, cuid }: UpdateCart,
      context: AppContext,
      info: GraphQLResolveInfo
    ) => {
      const cartAPI = new CartAPI(context);
      if (cartAPI.hasErrors) return { errors: cartAPI.errors };
      const { payload } = await cartAPI.updateCart({ id, cart, cuid });
    },
    submitCart: async (
      _: any,
      { id, cart, cuid }: UpdateCart,
      context: AppContext,
      info: GraphQLResolveInfo
    ) => {
      const cartAPI = new CartAPI(context);
      if (cartAPI.hasErrors) return { errors: cartAPI.errors };
      const { payload } = await cartAPI.submitCart({ id, cart, cuid });
    }
  }
};
