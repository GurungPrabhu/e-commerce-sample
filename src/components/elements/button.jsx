import React from "react"
import PropTypes from "prop-types"

const Button = ({ type, onClick, htmlType, children, size }) => {
  return (
    <button
      className={`btn btn-${type} btn-${size.length > 0 ? size : ""}`}
      type={htmlType}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger", "light", "dark"]),
  size: PropTypes.oneOf(["lg", "sm"]),
  onClick: PropTypes.func.isRequired,
  htmlType: PropTypes.oneOf(["submit", "button"]),
  children: PropTypes.any.isRequired
}

Button.defaultProps = {
  type: "primary",
  htmlType: "button",
  size: ""
}

export default Button
