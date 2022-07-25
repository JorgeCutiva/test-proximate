import { URL_SERVICE_GET_PRODUCTS } from '../constants/urlsServices'

const url = URL_SERVICE_GET_PRODUCTS

const getProductsService = async (userToken) => {
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
    const productsInformation = {
      status,
      message,
      data: products
    }
    return productsInformation
  } catch (error) {
    throw new Error(error)
  }
}

export default getProductsService
