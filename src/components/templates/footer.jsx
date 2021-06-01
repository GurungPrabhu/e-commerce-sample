import React from "react"
import PropTypes from "prop-types"

const Footer = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-center footer p-4">
      <span> Copyright 2021 </span>
    </nav>
  )
}

Footer.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string
}

Footer.defaultProps = {
  imageSrc: "",
  title: "Title"
}

export default Footer
