import axios from "./axios"

const getProducts = () => {
  return axios.get(`/products`)
}

const getProductById = (id) => {
  return axios.get(`/products/${id}`)
}

export { getProducts, getProductById }
