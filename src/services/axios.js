import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:3004",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

export default axiosInstance
