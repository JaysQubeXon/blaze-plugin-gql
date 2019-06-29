import { cartActions } from "./actions/cart";

export default {
  api_key: "",
  partner_key: "",
  developer_key: "",
  useDeveloperKey: true,
  apis: {
    cart: {
      enable: true,
      actions: { ...cartActions }
    }
  }
};
