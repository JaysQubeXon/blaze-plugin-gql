import { Error } from "../src/common";
import { ConsumerInfo } from "../src/apis/types/consumerInfo";

const register = async (response: ConsumerInfo | null, errors: Error[]): Promise<void> => {
  console.log("\nregister Callback!");
  /** Handle response with custom DB */
  // const queryResult = await pool.query(``);
  if (response) {
    console.log("Consumer ID:", response.id);
    console.log("\nConsumer:", response);
  }
  if (errors.length > 0) {
    console.log("has errors:", errors);
  }
};

export const authActions = {
  register
};
