import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import getProductByIdService from '../../services/getProductByIdService'
import Spinner from '../../components/Spinner/Spinner'

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  const userInformation = useSelector((state) => state.userInformation)
  const { userToken } = userInformation

  const getProductById = async () => {
    try {
      setIsLoading(true)
      const userInformation = { userToken }
      const productId = Number(id)
      const response = await getProductByIdService(userInformation, productId)
      const { status, message, data = [] } = response
      if (!status) {
        throw new Error(message)
      }
      setProduct(data)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProductById()
  }, [])

  return (
    <div className="bg-white">
      {isLoading
        ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
          )
        : (
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.title}
            </h2>
            <p className="mt-4 text-gray-500">{product.longDescription}</p>
          </div>
          <div className="grid">
            <img
              src={product.image}
              alt={product.title}
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
          )}
    </div>
  )
}

export default ProductDetail
