import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

// UTILS COMPONENT
const BreadCrumbWithoutLink = ({ item }) => {
  return <div className="breadcrumb-item active">{item.name}</div>
}

BreadCrumbWithoutLink.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

const BreadCrumbWithLink = ({ item }) => {
  return (
    <div className="breadcrumb-item">
      <Link to={item.url} className="text-dark">
        {item.name}
      </Link>
    </div>
  )
}

BreadCrumbWithLink.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }).isRequired
}

const BreadCrumb = ({ data }) => {
  return (
    <div className="row my-3">
      <div className="breadcrumb">
        {data.map((item, index) => {
          if (item.url) return <BreadCrumbWithLink key={index} item={item} />
          else return <BreadCrumbWithoutLink key={index} item={item} />
        })}
      </div>
    </div>
  )
}

BreadCrumb.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    map: PropTypes.func
  })
}

BreadCrumb.defaultProps = {
  data: []
}

export default BreadCrumb
