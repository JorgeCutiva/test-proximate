import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from '../ui/header/Header'
import Home from '../screens/Home/Home'
import Navbar from '../ui/Navbar/Navbar'
import ProductDetail from '../screens/ProductDetail/ProductDetail'

const PrivateRoute = () => {
  const userInformation = useSelector((state) => state.userInformation)
  const { isAuthenticated = true } = userInformation
  return isAuthenticated
    ? (
    <div>
      <Navbar />
      <Header />
      <div className="md:container md:mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
      )
    : (
    <Navigate to="/login" />
      )
}

export default PrivateRoute
