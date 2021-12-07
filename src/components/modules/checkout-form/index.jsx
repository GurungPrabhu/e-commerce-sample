import React, { useState } from "react"
import Button from "../../elements/button"
import { useNotification } from "../../context/notification.context"

const CheckoutForm = () => {
  const [formData, setFormData] = useState()
  const [makeNotification] = useNotification()

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("data", formData)
    makeNotification("Order Successful", "success")
  }

  return (
    <div className="row">
      <h1>Purchase form</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            required
            min="3"
            value={formData?.name || ""}
            onChange={onChange}
            placeholder="Prabhu Gurung"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput2">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData?.address || ""}
            id="address"
            required
            min="3"
            onChange={onChange}
            placeholder="Pokhara"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            required
            id="email"
            onChange={onChange}
            value={formData?.email || ""}
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
