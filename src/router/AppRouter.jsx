import { Routes, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<PrivateRoute />} />
        <Route path="login/*" element={<PublicRoute />} />
      </Routes>
    </div>
  )
}

export default AppRouter
