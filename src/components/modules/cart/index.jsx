import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartListItem from "./lib/cart-list-item"

const Cart = () => {
  const cart = useSelector((store) => store.cart)
  const [grandTotal, setGrandTotal] = useState(0)

  useEffect(() => {
    setGrandTotal(calculateGrandTotals(cart.products || []))
  }, [cart])

  const calculateGrandTotals = (productList) => {
    let grandTotal = 0
    productList.forEach((product) => {
      grandTotal += parseInt(product.total)
    })
    return grandTotal
  }
  return (
    <div className="row">
      <h1>Cart</h1>
      <ul className="list-group">
        {cart.products.map((product) => {
          return (
            <li className="list-group-item" key={product.id}>
              <CartListItem product={product} />
            </li>
          )
        })}
        <li className="list-group-item">
          <div className="row p-2">
            <div className="col">
              <span>
                <strong>Grand total: {grandTotal} Nrs</strong>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Cart
