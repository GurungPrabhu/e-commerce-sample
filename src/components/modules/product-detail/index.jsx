import React from "react"
import Button from "../../elements/button"
import CartListItem from "../cart-list-item"
import PropTypes from "prop-types"

const ProductDetail = ({ product }) => {
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
        <div className="col-9">
          <CartListItem
            perPrice={product?.price || 0}
            totalQuantity={product?.quantity || 0}
          />
        </div>
        <div className="col-3 text-center p-auto p-4">
          <Button onClick={() => {}}>Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
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
