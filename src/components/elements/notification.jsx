import React, { useEffect } from "react"
import PropTypes from "prop-types"

const Notification = ({ message, type, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) handleOnClick()
  }, [isOpen])

  const handleOnClick = () => {
    setTimeout(() => {
      onClose(false)
    }, 3000)
  }

  return (
    <>
      <div
        id="modal"
        className={`${
          isOpen ? "is-visible" : "is-not-visible"
        } bg-light p-2 text-center align-middle border ${
          type === "error" && "border-danger"
        }
        ${type === "success" && "border-success"} 
         `}>
        {type === "error" && (
          <i
            className="fa fa-exclamation fa-2x cart-text-align-middle m-3 text-danger"
            aria-hidden="true"></i>
        )}
        {type === "success" && (
          <i
            className="fa fa-check fa-2x cart-text-align-middle m-3 text-success"
            aria-hidden="true"></i>
        )}
        <span className="py-2 cart-text-align-middle">{message}</span>
      </div>
    </>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success"]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

Notification.defaultProps = {
  isOpen: false
}

export default Notification
