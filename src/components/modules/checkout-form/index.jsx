import React from "react"
import Button from "../../elements/button"

const CheckoutForm = () => {
  return (
    <div className="row">
      <h1>Purchase form</h1>
      <form>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Prabhu Gurung"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput2">Address</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Pokhara"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="something@gmail.com"
          />
        </div>
        <hr />
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput2">Payment Method</label>
          <input
            type="text"
            disabled
            value="Cash on Delivery"
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="form-group my-2 mt-4">
          <Button type="primary">Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
