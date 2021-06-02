import * as type from "../../constants"

const INITIAL_STATE = {
  products: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.ADD_PRODUCT_CART:
      return { ...state, products: [...state.products, action.payload] }
    case type.REMOVE_PRODUCT_CART:
      return {
        ...state,
        products: state.products.filter((item) => item.id === action.payload)
      }
    case type.CHANGE_PRODUCT_QUANTITY_CART: {
      let products = state.products
      products = products.map((item) => {
        if (item.id === action.payload.id) return action.payload
        else return item
      })
      return { ...state, products }
    }
    default:
      return state
  }
}

export default cartReducer
