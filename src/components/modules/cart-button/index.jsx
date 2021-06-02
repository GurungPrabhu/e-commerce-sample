import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import Button from "../../elements/button"

const Cart = () => {
  const cart = useSelector((store) => store.cart)
  const history = useHistory()

  const handleOnClick = () => {
    history.push("/check-out")
  }

  return (
    <>
      <Button type="dark" outline onClick={handleOnClick}>
        <div>
          <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
          {cart.products.length > 0 && (
            <span className="badge rounded-pill bg-primary mt-2">
              {cart.products.length}
            </span>
          )}
        </div>
      </Button>
    </>
  )
}

export default Cart
