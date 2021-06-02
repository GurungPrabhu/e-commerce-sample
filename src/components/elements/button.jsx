import React from "react"
import PropTypes from "prop-types"

const Button = ({ type, onClick, htmlType, children, size, outline }) => {
  return (
    <button
      className={`btn ${outline ? `btn-outline-${type}` : `btn-${type}`} btn-${
        size.length > 0 ? size : ""
      }`}
      type={htmlType}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "light",
    "dark",
    ""
  ]),
  size: PropTypes.oneOf(["lg", "sm", ""]),
  onClick: PropTypes.func,
  htmlType: PropTypes.oneOf(["submit", "button"]),
  children: PropTypes.any.isRequired,
  outline: PropTypes.bool
}

Button.defaultProps = {
  type: "primary",
  htmlType: "button",
  size: "",
  outline: false
}

export default Button
