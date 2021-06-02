import React from "react"
import Image from "../../../elements/image"
import PropTypes from "prop-types"
import Button from "../../../elements/button"

const CartListItem = ({ product, onClick }) => {
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
      <div className="col text-center">
        <Button type="danger" size="sm" onClick={() => onClick(product.id)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  )
}

CartListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default CartListItem
