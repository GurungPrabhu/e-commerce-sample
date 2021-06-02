import React from "react"
import { Link } from "react-router-dom"
import Button from "../elements/button"
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
      <BreadCrumb data={[...BREADCRUMB_DATA, { name: "No Page Found" }]} />
      <div className="row">
        <div className="col-12 text-center py-5">
          <h2 className="pb-5">No Page Found</h2>
          <Link to="/">
            <Button type="dark"> Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
