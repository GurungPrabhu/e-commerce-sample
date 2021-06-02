import React from "react"
import Button from "../../elements/button"
import AddToCart from "../cart-list-item"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, changeProductOnCart } from "../../../redux/actions/cart"
import { useHistory } from "react-router"
import { useNotification } from "../../context/notification.context"

const ProductDetail = ({ product }) => {
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const history = useHistory()
  const [notification] = useNotification()

  const isInCart = (product) => {
    if (cart.products.some((item) => item.id === product.id)) return true
    else return false
  }

  const handleOnClickAddToCart = (quantity) => {
    if (isInCart(product)) {
      dispatch(changeProductOnCart(product, quantity))
        .then((res) => {
          if (res) notification("Product updated successfully!", "success")
        })
        .catch((err) => {
          notification(err.message, "error")
        })
    } else {
      dispatch(addToCart(product, quantity))
        .then((res) => {
          if (res) notification("Product updated successfully!", "success")
        })
        .catch((err) => {
          notification(err.message, "error")
        })
    }
  }

  const handleOnClickBuyNow = () => {
    if (!isInCart(product)) {
      dispatch(addToCart(product, 1))
        .then((res) => {
          if (res) notification("Product added successfully!", "success")
        })
        .catch((err) => {
          notification(err.message, "error")
        })
    }
    history.push("/check-out")
  }

  return (
    <div className="row" style={{ height: "100%" }}>
      <div className="row">
        <div className="col-12">
          <h4>{product?.name || ""} </h4>
        </div>
      </div>
      <div className="row product-description">
        <div className="col-12">
          <p>{product?.description || ""}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-9">
          <AddToCart
            onClick={handleOnClickAddToCart}
            perPrice={product?.price || 0}
            totalQuantity={product?.quantity || 0}
          />
        </div>
        <div className="col-12 col-lg-3 text-center p-auto p-4">
          <Button onClick={handleOnClickBuyNow}>Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })
}

ProductDetail.defaultProps = {
  product: {
    name: "",
    description: "",
    price: 0,
    quantity: 0
  }
}
export default ProductDetail
