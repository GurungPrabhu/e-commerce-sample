import * as type from "../../constants"

const INITIAL_STATE = {
  products: []
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.FETCH_PRODUCTS: {
      let availableProducts = state.products
      let udpateedProducts = availableProducts.map((item) => {
        if (action.payload.some((itm) => itm.id === item.id))
          return action.payload.find((itm) => itm.id === item.id)
        else return item
      })
      return { ...state, products: udpateedProducts }
    }
    case type.UPDATE_PRODUCT: {
      let updatedProducts = state.products.map((item) => {
        if (item.id === action.payload.id) return action.payload
        else return item
      })
      return { ...state, products: updatedProducts }
    }
    default:
      return state
  }
}

export default productReducer
