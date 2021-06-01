import React from "react"
import ProductCard from "../modules/product-card"
import PropTypes from "prop-types"

const ProductList = ({ productList }) => {
  return (
    <div className="container m-auto">
      <div className="row">
        <div className="col-12 p-5 text-center">
          <h2>
            <strong>Shop our best products</strong>
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {productList.map((item) => (
          <ProductCard product={item} key={item.id || 0} />
        ))}
        {productList.length === 0 && (
          <div className="col-12 text-center">
            <p>Sorry, we are out of product!</p>
          </div>
        )}
      </div>
    </div>
  )
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object)
}

ProductList.defaultProps = {
  productList: []
}

export default ProductList
