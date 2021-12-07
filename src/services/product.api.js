import data from "../dummy-server/product-data.json"

const getProducts = () => {
  // simulate api call for deployment
  return new Promise((resolve) => {
    resolve({
      data: data.products
    })
  })
}

const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    let selectedProduct = data.products.find((item) => item.id === parseInt(id))
    if (data)
      resolve({
        data: selectedProduct
      })
    reject()
  })
}

export { getProducts, getProductById }
