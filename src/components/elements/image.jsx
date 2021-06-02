import React from "react"
import PropTypes from "prop-types"

const Image = ({ width, alt, height, src }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="d-inline-block mx-2 img-fluid"
    />
  )
}

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

Image.defaultProps = {
  width: "30",
  height: "24",
  alt: ""
}

export default Image
