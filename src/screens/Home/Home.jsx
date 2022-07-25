import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import getProductsService from '../../services/getProductsService'
import ItemsList from './components/ItemsList'
import LoadingList from './components/LoadingList'

const Home = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const userInformation = useSelector((state) => state.userInformation)
  const { userToken } = userInformation

  const getProducts = async () => {
    try {
      setIsLoading(true)
      const userInformation = { userToken }
      const response = await getProductsService(userInformation)
      const { status, message, data = [] } = response
      if (!status) {
        throw new Error(message)
      }
      setProducts(data)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Lista de productos
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {isLoading
            ? (
            <LoadingList numberOfItems={8} />
              )
            : (
            <ItemsList items={products} />
              )}
        </div>
      </div>
    </div>
  )
}

export default Home
