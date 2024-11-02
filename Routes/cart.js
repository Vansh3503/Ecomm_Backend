import express from 'express'
import {
  addToCart,
  clearCart,
  removeProductFromCart,
  userCart,
  decreaseProudctQty,
} from "../Controllers/cart.js";



const router = express.Router();

// add To cart
router.post('/add',addToCart)

// get User Cart
router.get("/user", userCart);

// remove product from cart
router.delete("/remove/:productId", removeProductFromCart);

// clear cart
router.delete("/clear", clearCart);

// decrease items qty
router.post("/--qty", decreaseProudctQty);


export default router;
