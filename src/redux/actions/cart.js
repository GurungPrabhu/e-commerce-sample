import * as type from "../constants"
import { getProductById } from "../../services/product.api"

const addToCartAction = (product) => ({
  type: type.ADD_PRODUCT_CART,
  payload: product
})

const removeFromCartAction = (id) => ({
  type: type.REMOVE_PRODUCT_CART,
  payload: id
})

const changeProductOnCartAction = (product) => ({
  type: type.CHANGE_PRODUCT_QUANTITY_CART,
  payload: product
})

const changeProductObjToCartObj = (product, quantity) => ({
  id: product.id,
  name: product.name,
  quantity: quantity,
  price: product.price,
  image: product.image,
  total: parseInt(product.price) * parseInt(quantity)
})

const validateProductAvailabilityFromServer = (product) => {
  return getProductById(product.id)
    .then((res) => {
      let availableQuantity = parseInt(res.data.quantity)
      if (availableQuantity >= product.quantity) return true
      else return false
    })
    .catch((err) => console.log(err))
}

const addToCart =
  (product, quantity = 1) =>
  (dispatch) => {
    let cartProduct = changeProductObjToCartObj(product, quantity)
    validateProductAvailabilityFromServer(cartProduct)
      .then((res) => {
        console.log("res", res)
        if (res) dispatch(addToCartAction(cartProduct))
        else throw Error("Product Quantity not avaliable!")
      })
      .catch((err) => {
        console.log(err)
      })
  }

const changeProductOnCart = (product, quantity) => (dispatch) => {
  let cartProduct = changeProductObjToCartObj(product, quantity)
  validateProductAvailabilityFromServer(cartProduct)
    .then((res) => {
      if (res) dispatch(changeProductOnCartAction(cartProduct))
      else throw Error("Product Quantitiy not available")
    })
    .catch((err) => {
      console.log(err)
    })
}

export { addToCart, removeFromCartAction, changeProductOnCart }
