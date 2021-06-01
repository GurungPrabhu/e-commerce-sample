import React from "react"
import Image from "../../../elements/image"

const CartListItem = () => {
  return (
    <div className="row p-3">
      <div className="col">
        <Image src="/products/product-1.png" width="100" height="auto" />
      </div>
      <div className="col text-center">
        <span>
          <strong>Play Station </strong>
        </span>
      </div>
      <div className="col text-center">
        <span>Qty: 5</span>
      </div>
      <div className="col text-center">
        <span>Per: 1000</span>
      </div>
      <div className="col text-center">Total: 2000</div>
    </div>
  )
}

export default CartListItem
