import React, { useState } from "react"
import Button from "../../elements/button"
import Select from "../../elements/select"
import PropTypes from "prop-types"

const CartListItem = ({ perPrice, totalQuantity, onClick }) => {
  const [componentQuantity, setQuantity] = useState(1)

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleOnClickAddToCart = () => {
    onClick(componentQuantity)
  }

  const getNumberArray = (limit) => {
    let arr = []
    for (let i = 0; i < parseInt(limit); i++) {
      arr.push(i + 1)
    }
    return arr
  }

  return (
    <div id="cart-list-item" className="border">
      <div className="row p-4 px-5 pt-3">
        <div className="col-12 col-lg-4 ">
          <Select
            value={componentQuantity}
            onChange={handleQuantityChange}
            label="Quantity">
            {getNumberArray(totalQuantity).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </div>
        <div className="col-12 col-lg-4 align-center pt-3">
          <span className="cart-text-align-middle">
            Price: {componentQuantity * parseInt(perPrice)} rs
          </span>
        </div>
        <div className="col-12 col-lg-4 pt-3">
          <Button onClick={handleOnClickAddToCart}>Add to Cart </Button>
        </div>
      </div>
    </div>
  )
}

CartListItem.propTypes = {
  totalQuantity: PropTypes.number,
  perPrice: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

CartListItem.defaultProps = {
  totalQuantity: 10,
  perPrice: 0
}

export default CartListItem
