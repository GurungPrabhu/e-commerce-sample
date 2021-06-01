import React from "react"
import CartListItem from "./lib/cart-list-item"

const Cart = () => {
  return (
    <div className="row">
      <h1>Cart</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <CartListItem />
        </li>
        <li className="list-group-item">
          <CartListItem />
        </li>
        <li className="list-group-item">
          <div className="row p-2">
            <div className="col">
              <span>
                <strong>Grand total: 5000</strong>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Cart
