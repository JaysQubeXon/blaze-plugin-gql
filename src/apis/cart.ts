import { AxiosRequestConfig, AxiosResponse } from "axios";
import { BlazeCart } from "./types/cart.d";
import Core from "../core";
import { SearchRange } from "./types/common.d";
import { AppContext } from "../context.d";
import {
  CartPayload,
  BlazeAxiosCart,
  AxiosCart,
  FindProductCostResultPayload,
  GetOrderHistoryResponse
} from "./types/responses.d";
import {
  lengthGT0,
  isNumber,
  isNotNumber,
  isString,
  isNotString,
  isFunction,
  longStringExists,
  isEmptyString
} from "../utils";
import { Error } from "../common";

/**
 * @todo empty result error handling
 * @todo catch error handling
 */

class CartAPI extends Core {
  constructor(context: AppContext) {
    super(context);
  }

  public async updateCart({ id, cart, cuid }: UpdateCart): CartPayload {
    if (await this.useApiKeys("Cart-updateCart")) {
      return { payload: null };
    }

    if (!id || typeof id !== "string") {
      this.addError({
        code: "id-invalid",
        location: "Cart-updateCart",
        message: `Required ID of type string but got ${id} of type ${typeof id}`
      });
    }

    if (!cart || typeof cart !== "object") {
      this.addError({
        code: "cart-invalid",
        location: "Cart-updateCart",
        message: `Required Cart of type UpdateCart but got ${cart} of type ${typeof cart}`
      });
      return { payload: null };
    } else if (!id) {
      return { payload: null };
    }

    if (!!cuid && typeof cuid !== "string") {
      this.addError({
        code: "cuid-invalid",
        location: "Cart-updateCart",
        message: `Required cuid of type string but got ${cuid} of type ${typeof cuid}`
      });
      return { payload: null };
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "post",
      headers: this.headers,
      url: `/partner/store/cart/updateCart/${id}`,
      data: cart,
      params: { cuid }
    };

    try {
      const response: AxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
        this.addError({
          code: "empty-result",
          location: "Cart-updateCart",
          message: `Axios response returned empty.`,
          error: response
        });
        return { payload: null };
      }
    } catch (error) {
      this.addError({
        code: "catch-error",
        location: "Cart-updateCart",
        message: `Attempt to call updateCart endpoint failed.`,
        error: JSON.stringify(error)
      });
      return { payload: null };
    }
  }

  public async submitCart({ id, cart, cuid }: UpdateCart): CartPayload {
    if (await this.useApiKeys("Cart-submitCart")) {
      return { payload: null };
    }

    if (!id || typeof id !== "string") {
      this.addError({
        code: "id-invalid",
        location: "Cart-submitCart",
        message: `Required ID of type string but got ${id} of type ${typeof id}`
      });
    }

    if (!cart || typeof cart !== "object") {
      this.addError({
        code: "cart-invalid",
        location: "Cart-submitCart",
        message: `Required Cart of type submitCart but got ${cart} of type ${typeof cart}`
      });
    }

    if (!!cuid && typeof cuid !== "string") {
      this.addError({
        code: "cuid-invalid",
        location: "Cart-submitCart",
        message: `Required cuid of type string but got ${cuid} of type ${typeof cuid}`
      });
    }

    if (lengthGT0(this.hasErrors)) return { payload: null };

    const axiosOptions: AxiosRequestConfig = {
      method: "post",
      headers: this.headers,
      url: `/partner/store/cart/submitCart/${id}`,
      data: cart,
      params: { cuid }
    };

    try {
      const response: AxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
        this.addError({
          code: "empty-result",
          location: "Cart-submitCart",
          message: `Axios response returned empty.`,
          error: response
        });
        return { payload: null };
      }
    } catch (error) {
      this.addError({
        code: "catch-error",
        location: "Cart-submitCart",
        message: `Attempt to call submitCart endpoint failed.`,
        error: JSON.stringify(error)
      });
      return { payload: null };
    }
  }

  public async getOrderHistory(
    { limit, start, cuid }: GetOrderHistory,
    cb?: CallbackFunc<GetOrderHistoryResponse, void>
  ): Promise<GetOrderHistoryResponse> {
    if (await this.useApiKeys("Cart-getOrderHistory")) {
      return { values: null, limit: 0, skip: 0, total: 0 };
    }

    let params: GetOrderHistory = {};

    if (isNumber(limit)) {
      params.limit = limit;
    } else if (isNotNumber(limit)) {
      this.addError({
        code: "limit-invalid",
        location: "Cart-getOrderHistory",
        message: `Optional query param 'limit' of type number but got ${limit} of type ${typeof limit}`
      });
    }

    if (isNumber(start)) {
      params.start = start;
    } else if (isNotNumber(start)) {
      this.addError({
        code: "start-invalid",
        location: "Cart-getOrderHistory",
        message: `Optional query param 'start' of type number but got ${start} of type ${typeof start}`
      });
    }

    if (isString(cuid)) {
      params.cuid = cuid;
    } else if (isNotString(cuid)) {
      this.addError({
        code: "cuid-invalid",
        location: "Cart-getOrderHistory",
        message: `Optional query param 'cuid' of type string but got ${cuid} of type ${typeof cuid}`
      });
    }

    if (this.hasErrors) return { values: null, limit: 0, skip: 0, total: 0 };

    const axiosOptions: AxiosRequestConfig = {
      method: "get",
      headers: this.headers,
      url: `/partner/store/cart/history`,
      params
    };

    try {
      const response: BlazeAxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        if (isFunction(cb)) cb(response.data, this.errors);
        return { ...response.data };
      } else {
        this.addError({
          code: "empty-result",
          location: "Cart-getOrderHistory",
          message: `Axios response returned empty.`,
          error: response
        });
        return { values: null, limit: 0, skip: 0, total: 0 };
      }
    } catch (error) {
      this.addError({
        code: "catch-error",
        location: "Cart-getOrderHistory",
        message: `Attempt to call getOrderHistory endpoint failed.`,
        error: JSON.stringify(error)
      });
      return { values: null, limit: 0, skip: 0, total: 0 };
    }
  }

  public async getActiveCart({ sessionID, cuid }: GetActiveCart): CartPayload {
    if (await this.useApiKeys("Cart-getActiveCart")) {
      return { payload: null };
    }

    let params: GetActiveCart = {};

    if (longStringExists(sessionID)) {
      params.sessionID = sessionID;
    } else if (isNotString(sessionID)) {
    }

    if (isNotString(cuid)) {
      this.addError({
        code: "cuid-invalid",
        location: "Cart-getActiveCart",
        message: `Optional query param 'cuid' of type string but got ${cuid} of type ${typeof cuid}`
      });
      return { payload: null };
    } else if (longStringExists(cuid)) {
      params.cuid = cuid;
    } else if (isEmptyString(cuid)) {
      this.addError({
        code: "cuid-empty",
        location: "Cart-getActiveCart",
        message: `Optional query param 'cuid' of type string but got empty`
      });
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "get",
      headers: this.headers,
      url: `/partner/store/cart/active`,
      params
    };

    try {
      const response: AxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
        this.addError({
          code: "empty-result",
          location: "Cart-getActiveCart",
          message: `Axios response returned empty.`
        });
        return { payload: null };
      }
    } catch (error) {
      this.addError({
        code: "catch-error",
        location: "Cart-getActiveCart",
        message: `Attempt to call getActiveCart endpoint failed.`,
        error: JSON.stringify(error)
      });
      return { payload: null };
    }
  }

  public async prepareActiveCart(cuid: string): CartPayload {
    if (await this.useApiKeys("Cart-prepareActiveCart")) {
      return { payload: null };
    }

    let params: { cuid?: string } = {};

    if (isNotString(cuid)) {
      this.addError({
        code: "cuid-invalid",
        location: "Cart-prepareActiveCart",
        message: `Optional query param 'cuid' of type string but got ${cuid} of type ${typeof cuid}`
      });
      return { payload: null };
    } else if (longStringExists(cuid)) {
      params.cuid = cuid;
    } else if (isEmptyString(cuid)) {
      this.addError({
        code: "cuid-empty",
        location: "Cart-prepareActiveCart",
        message: `Optional query param 'cuid' of type string but got empty`
      });
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "post",
      headers: this.headers,
      url: `/partner/store/cart/prepare`,
      params
    };

    try {
      const response: AxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
        this.addError({
          code: "empty-result",
          location: "Cart-prepareActiveCart",
          message: `Axios response returned empty.`
        });
        return { payload: null };
      }
    } catch (error) {
      this.addError({
        code: "catch-error",
        location: "Cart-prepareActiveCart",
        message: `Attempt to call prepareActiveCart endpoint failed.`,
        error: JSON.stringify(error)
      });
      return { payload: null };
    }
  }

  /**
   * Find product cost
   *
   * @param { productId: string!, quantity: number!} param0 required request body object
   * @param {string} cuid query param
   */
  public async findCost({
    cost: { productId, quantity },
    cuid
  }: FindProductCost): FindProductCostResultPayload {
    if (await this.useApiKeys("Cart-findCost")) {
      return { payload: null };
    }

    let params: { cuid?: string } = {};

    if (isNotString(cuid)) {
      this.addError({
        code: "cuid-invalid",
        location: "Cart-findCost",
        message: `Optional query param 'cuid' of type string but got ${cuid} of type ${typeof cuid}`
      });
      return { payload: null };
    } else if (longStringExists(cuid)) {
      params.cuid = cuid;
    } else if (isEmptyString(cuid)) {
      this.addError({
        code: "cuid-empty",
        location: "Cart-findCost",
        message: `Optional query param 'cuid' of type string but got empty`
      });
    }

    let data: { productId?: string; quantity?: number } = {};

    /** @handle */
    if (isNotString(productId)) {
    }
    if (isNotNumber(quantity)) {
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "post",
      headers: this.headers,
      url: `/api/v1/partner/store/cart/product/findCost`,
      params,
      data
    };

    try {
      const response: AxiosResponse<FindProductCostResult> = await this.axios(
        axiosOptions
      );
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
        this.addError({
          code: "empty-result",
          location: "Cart-findCost",
          message: `Axios response returned empty.`
        });
        return { payload: null };
      }
    } catch (error) {
      this.addError({
        code: "catch-error",
        location: "Cart-findCost",
        message: `Attempt to call findCost endpoint failed.`,
        error: JSON.stringify(error)
      });
      return { payload: null };
    }
  }

  /**
   * Find cart by public key
   *
   * @param {string!} publicKey
   */
  public async findCartWithPublicKey(publicKey: string): CartPayload {
    if (await this.useApiKeys("Cart-findCartWithPublicKey")) {
      return { payload: null };
    }

    if (isEmptyString(publicKey)) {
      this.addError({
        code: "publicKey-invalid",
        location: "Cart-findCartWithPublicKey",
        message: `Axios response returned empty.`
      });
      return { payload: null };
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "get",
      headers: this.headers,
      url: `/api/v1/partner/store/cart/public/${publicKey}`
    };

    try {
      const response: AxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
        this.addError({
          code: "empty-result",
          location: "Cart-findCartWithPublicKey",
          message: `Axios response returned empty.`
        });
        return { payload: null };
      }
    } catch (error) {
      this.addError({
        code: "catch-error",
        location: "Cart-findCartWithPublicKey",
        message: `Attempt to call findCartWithPublicKey endpoint failed.`,
        error: JSON.stringify(error)
      });
      return { payload: null };
    }
  }

  public async getCartByID(constumerCartID: string): CartPayload {
    if (await this.useApiKeys("Cart-getCartByID")) {
      return { payload: null };
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "get",
      headers: this.headers,
      url: `/api/v1/partner/store/cart/${constumerCartID}`
    };

    try {
      const response: AxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
      }
    } catch (err) {}
  }

  public async cancelCart(constumerCartID: string): CartPayload {
    if (await this.useApiKeys("Cart-cancelCart")) {
      return { payload: null };
    }

    const axiosOptions: AxiosRequestConfig = {
      method: "delete",
      headers: this.headers,
      url: `/api/v1/partner/store/cart/cancelCart/${constumerCartID}`
    };

    try {
      const response: AxiosCart = await this.axios(axiosOptions);
      if (!!response && response.status) {
        return { payload: response.data };
      } else {
      }
    } catch (err) {}
  }
}

export default CartAPI;

export interface GetOrderHistory extends SearchRange<number> {
  cuid?: string;
}

export interface GetActiveCart {
  sessionID?: string;
  cuid?: string;
}

export interface FindProductCost {
  cost: {
    productId: string;
    quantity: number;
  };
  cuid: string;
}

export interface FindProductCostResult {
  quantity: number;
  cost: number;
  productId: string;
}

export interface UpdateCart {
  id: string;
  cart: BlazeCart;
  cuid?: string;
}

export type CallbackFunc<T, R> = (response: T, errors?: Error[]) => Promise<R>