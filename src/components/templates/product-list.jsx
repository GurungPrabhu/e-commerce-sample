import React from "react"
import ProductCard from "../modules/product-card"

const ProductList = () => {
  return (
    <div className="container m-auto">
      <div className="row justify-content-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductList
