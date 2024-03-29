import React, { useEffect, useState } from "react"
import { getProducts } from "../../services/product.api"
import Button from "../elements/button"
import ProductList from "../templates/product-list"
import { useNotification } from "../context/notification.context"

const DUMMY_PRODUCT_LIMIT = 9

const HomePage = () => {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const [paginationLimit, setPaginationLimit] = useState(6)
  const [notification] = useNotification()

  const fetchProducts = () => {
    setLoading(true)
    getProducts()
      .then((res) => {
        setProductList((prev) => [...prev, ...res.data])
        setLoading(false)
      })
      .catch((err) => {
        notification(err.message, err)
        setLoading(false)
      })
  }

  const onClickLoadMore = () => {
    setPaginationLimit((prev) => prev + 3)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div id="home-page">
      <ProductList
        productList={productList.slice(0, paginationLimit)}
        loading={loading}
      />
      <div className="row m-3">
        <div className="col-12 text-center">
          {productList.length === 0 ||
            (paginationLimit < DUMMY_PRODUCT_LIMIT && (
              <Button type="dark" onClick={onClickLoadMore}>
                Load More
              </Button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
