import React from "react"
import Cart from "../modules/cart"
import CheckoutForm from "../modules/checkout-form"
import BreadCrumb from "../modules/bread-crumb"

const BREADCRUMB_DATA = [
  {
    url: "/",
    name: "All products"
  }
]

const CheckOut = () => {
  return (
    <div id="checkout" className="container">
      <BreadCrumb data={[...BREADCRUMB_DATA, { name: "Check-out" }]} />
      <div className="row">
        <div className="col-md-12 col-lg-6 px-4">
          <Cart />
        </div>
        <div className="col-md-12 col-lg-6 px-4">
          <CheckoutForm />
        </div>
      </div>
    </div>
  )
}

export default CheckOut
