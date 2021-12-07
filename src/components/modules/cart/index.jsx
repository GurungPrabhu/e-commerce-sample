import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCartAction } from "../../../redux/actions/cart"
import { useNotification } from "../../context/notification.context"
import CartListItem from "./lib/cart-list-item"

const Cart = () => {
  const cart = useSelector((store) => store.cart)
  const [grandTotal, setGrandTotal] = useState(0)
  const dispatch = useDispatch()
  const [makeNotification] = useNotification()

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

  const handleOnRemoveProductFromCart = (id) => {
    dispatch(removeFromCartAction(id))
    makeNotification("Product removed successfully!", "success")
  }

  return (
    <div className="row">
      <h1>Cart</h1>
      <ul className="list-group">
        {cart.products.map((product) => {
          return (
            <li className="list-group-item" key={product.id}>
              <CartListItem
                product={product}
                onClick={handleOnRemoveProductFromCart}
              />
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
