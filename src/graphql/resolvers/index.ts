import { AppContext } from "../../context.d";
import { GetOrderHistory, UpdateCart, GetActiveCart } from "../../apis/cart";
import { GraphQLResolveInfo } from "graphql";
import { CartAPI } from "../../apis";
import enums from "./enums";
import {
  GetOrderHistoryResponse
} from "../../apis/types/responses.d";
import { isFunction } from "../../utils";

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
        if (cartAPI.hasErrors) return { errors: cartAPI.errors };
        return response;
      } else {
        const response = await cartAPI.getOrderHistory(args);
        if (cartAPI.hasErrors) return { errors: cartAPI.errors };
        return response;
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
