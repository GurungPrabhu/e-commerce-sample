import React from "react"
import Image from "../../../elements/image"
import PropTypes from "prop-types"

const CartListItem = ({ product }) => {
  return (
    <div className="row p-3">
      <div className="col">
        <Image src={product?.image || ""} width="100" height="auto" />
      </div>
      <div className="col text-center">
        <span>
          <strong>{product?.name || ""}</strong>
        </span>
      </div>
      <div className="col text-center">
        <span>Qty: {product?.quantity || ""}</span>
      </div>
      <div className="col text-center">
        <span>Per: {product?.price || ""}</span>
      </div>
      <div className="col text-center">Total: {product?.total || ""}</div>
    </div>
  )
}

CartListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.number,
    total: PropTypes.number,
    image: PropTypes.string
  }).isRequired
}

export default CartListItem
