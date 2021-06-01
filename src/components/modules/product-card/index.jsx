import React, { useState } from "react"
import Image from "../../elements/image"
import Button from "../../elements/button"

const ProductCard = () => {
  const [priceIsVisible, setPriceVisible] = useState(true)
  const [btnIsVisible, setBtnVisible] = useState(false)

  const handleOnMouseEnter = () => {
    setPriceVisible(false)
    setBtnVisible(true)
  }

  const handleOnMouseLeave = () => {
    setBtnVisible(false)
    setPriceVisible(true)
  }

  return (
    <div
      className="product-card m-2 text-center"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      <div className="product-card-body row">
        <div className="col align-self-center">
          <Image src="./products/product-1.png" height="auto" width="200" />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12 mb-2">
          <span>Play Station 5</span>
        </div>
        <div
          className={`product-card-text col-12 mb-2 ${
            priceIsVisible ? "is-visible " : "d-none"
          }`}>
          <span className="text-muted">
            <small>Rs 50000 </small>
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

export default ProductCard
