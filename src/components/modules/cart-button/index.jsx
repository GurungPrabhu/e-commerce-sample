import React from "react"
import Button from "../../elements/button"

const Cart = () => {
  return (
    <>
      <Button type="light" onClick={() => {}}>
        <div>
          <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
          <span>Cart</span>
        </div>
      </Button>
    </>
  )
}

export default Cart
