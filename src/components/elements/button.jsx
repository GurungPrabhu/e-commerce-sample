import React from "react"
import PropTypes from "prop-types"

const Button = ({ type, onClick, htmlType, children }) => {
  return (
    <button className={`btn btn-${type}`} type={htmlType} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger", "light", "dark"]),
  onClick: PropTypes.func.isRequired,
  htmlType: PropTypes.oneOf(["submit", "button"]),
  children: PropTypes.any.isRequired
}

Button.defaultProps = {
  type: "primary",
  htmlType: "button"
}

export default Button
