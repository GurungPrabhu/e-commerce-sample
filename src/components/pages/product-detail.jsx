import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProductById } from "../../services/product.api"
import { useNotification } from "../context/notification.context"
import Image from "../elements/image"
import BreadCrumb from "../modules/bread-crumb"
import ProductDetailBody from "../modules/product-detail"

const BREADCRUMB_DATA = [
  {
    url: "/",
    name: "All products"
  }
]

const ProductDetail = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const [makeNotification] = useNotification()

  const fetchProductById = (id) => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        makeNotification(err.message, "error")
      })
  }

  useEffect(() => {
    fetchProductById(id)
  }, [id])

  return (
    <div id="product-detail" className="container py-4">
      <BreadCrumb data={[...BREADCRUMB_DATA, { name: product?.name }]} />
      <div className="row">
        <div className="col-12  col-sm-12 col-md-12 col-lg-6">
          <div className="col align-self-center p-4">
            <Image src={product?.image || ""} height="auto" width="500" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <ProductDetailBody product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
