import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Login from '../screens/Login/Login'

const PublicRoute = () => {
  const userInformation = useSelector((state) => state.userInformation)
  const { isAuthenticated = false } = userInformation
  return isAuthenticated
    ? (
    <Navigate to="/home" />
      )
    : (
    <Routes>
      <Route path="/*" element={<Login />} />
    </Routes>
      )
}

export default PublicRoute
