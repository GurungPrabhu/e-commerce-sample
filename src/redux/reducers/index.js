import { combineReducers } from "redux"
import products from "./lib/products"
import cart from "./lib/cart"

export default combineReducers({
  products,
  cart
})
