import { URL_SERVICE_GET_PRODUCTS } from '../constants/urlsServices'

const url = URL_SERVICE_GET_PRODUCTS

const getProductByIdService = async (userToken, productId) => {
  try {
    const params = {
      method: 'POST',
      body: JSON.stringify(userToken),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(url, params)
    const result = await response.json()
    const { status, message, data } = result
    const products = JSON.parse(data)?.products || []
    const product = products.find((item) => item.id === productId)
    if (!product) {
      throw new Error(
        'No se encontró el id del producto o el producto no tiene información'
      )
    }
    const productsInformation = {
      status,
      message,
      data: product
    }
    return productsInformation
  } catch (error) {
    throw new Error(error)
  }
}

export default getProductByIdService
