import { cartActions, authActions } from "./actions";

export default {
  api_key: "f794e56bfc4a4b6a9e7afea951353413",
  partner_key: "5b09924d6d044d1f9939f02000e24d78",
  developer_key: "16fb625d7dec452db6e018abdf8efaa9",
  useDeveloperKey: true,
  apis: {
    cart: {
      enable: true,
      actions: { ...cartActions }
    },
    authentication: {
      enable: true,
      actions: { ...authActions }
    }
  }
};
