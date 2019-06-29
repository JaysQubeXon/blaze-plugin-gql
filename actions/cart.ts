import { GetOrderHistoryResponse } from "../src/apis/types/responses.d";
import { pool } from "../configs/psql";
import { CartAPIActions } from "../src/context.d";
import { Error } from "../src/common";

const getOrderHistory = async (
  response: GetOrderHistoryResponse,
  errors: Error[]
): Promise<void> => {
  /** Handle response with custom DB */
  // const queryResult = await pool.query(``);
  console.log("getOrderHistory Callback!");
};

export const cartActions: CartAPIActions = {
  getOrderHistory
};
