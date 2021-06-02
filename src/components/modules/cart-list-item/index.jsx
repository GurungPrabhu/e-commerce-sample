import React, { useState } from "react"
import Button from "../../elements/button"
import Select from "../../elements/select"
import PropTypes from "prop-types"
import { useHistory } from "react-router"

const CartListItem = ({ perPrice, totalQuantity }) => {
  const [componentQuantity, setQuantity] = useState(1)
  const history = useHistory()

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleBuyNowClick = () => {
    history.push("/check-out")
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
          <Button onClick={handleBuyNowClick}>Add to Cart </Button>
        </div>
      </div>
    </div>
  )
}

CartListItem.propTypes = {
  totalQuantity: PropTypes.number,
  totalPrice: PropTypes.number,
  perPrice: PropTypes.number,
  quantity: PropTypes.number,
  forProductDetail: PropTypes.bool
}

CartListItem.defaultProps = {
  totalQuantity: 10,
  totalPrice: 0,
  perPrice: 100,
  quantity: 0,
  forProductDetail: true
}

export default CartListItem
