# Blaze Bridge GraphQL

In order to use this packaged, you will need to create your own  `blaze.config.js` file with the following configurations:

```js
import { cartActions } from "./src/actions/cart";
import { transactionActions } from "./src/actions/transaction";

export default = {
  cart: {
    enable: true,
    actions: {
      getOrderHistory,
      updateCart
    }
  },
  transaction: {
    enabled: true,
    actions: { ...transactionActions }
  }
  ...
};
```

`cartActions` is an object with callbacks of the form:

```js
(resoonse) => {
  // Do anything you want with the data while it is in transit
  // for example, record in DB
  const { id } = response;
  const result = pgql.pool.query(`SELECT * FROM products WHERE id=${id}`);
  if (result.rowCount > 0) {
    return result;
  } else {
    // handle empty error
  }
}
```