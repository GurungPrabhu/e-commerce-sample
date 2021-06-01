import React, { useState } from "react"
import Image from "../../elements/image"
import Button from "../../elements/button"
import PropTypes from "prop-types"
import { useHistory } from "react-router"

const ProductCard = ({ product }) => {
  const [priceIsVisible, setPriceVisible] = useState(true)
  const [btnIsVisible, setBtnVisible] = useState(false)
  const history = useHistory()

  const handleOnMouseEnter = () => {
    setPriceVisible(false)
    setBtnVisible(true)
  }

  const handleOnMouseLeave = () => {
    setBtnVisible(false)
    setPriceVisible(true)
  }

  const handleOnMouseClick = () => {
    history.push(`/product-detail/${product.id}`)
  }

  return (
    <div
      className="product-card m-2 text-center"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      <div className="product-card-body row" onClick={handleOnMouseClick}>
        <div className="col align-self-center">
          <Image src={product?.image || ""} height="auto" width="200" />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12 mb-2">
          <span>{product?.name}</span>
        </div>
        <div
          className={`product-card-text col-12 mb-2 ${
            priceIsVisible ? "is-visible " : "d-none"
          }`}>
          <span className="text-muted">
            <small>Rs {product?.price} </small>
          </span>
        </div>
        <div
          className={`col-12 mb-2 ${
            btnIsVisible ? "is-visible" : "is-not-visible"
          }`}>
          <Button type="dark">Add to cart</Button>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.name
  }).isRequired
}
export default ProductCard
