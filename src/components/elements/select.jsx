import React from "react"
import PropTypes from "prop-types"

const Select = ({ children, label, onChange, value }) => {
  return (
    <div className="form-group row">
      <label className="col-7 py-1" htmlFor="exampleFormControlSelect1">
        {label}
      </label>
      <select
        className="col-5 form-control form-control-sm"
        value={value}
        onChange={onChange}
        id="exampleFormControlSelect1">
        {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  children: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Select
