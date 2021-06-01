import React from "react"
import Image from "../elements/image"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Cart from "../modules/cart-button"

const Header = ({ imageSrc, title }) => {
  return (
    <nav className="navbar navbar-light bg-light p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Image src={imageSrc} width="50" height="50" />
          <span className="h3">{title}</span>
        </Link>
        <Cart />
      </div>
    </nav>
  )
}

Header.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string
}

Header.defaultProps = {
  imageSrc: "",
  title: "Title"
}

export default Header
