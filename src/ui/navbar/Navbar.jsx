import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { userLogoutAction } from '../../redux/actions/userActions'
import deleteDataInLocalStorage from '../../helpers/deleteDataInLocalStorage'
import { KEY_NAME_USER_INFORMATION } from '../../constants/localStorage'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userInformation = useSelector((state) => state.userInformation)
  const { name: userName } = userInformation

  const onLogoutUser = () => {
    dispatch(userLogoutAction)
    deleteDataInLocalStorage(KEY_NAME_USER_INFORMATION)
    navigate('/login', { replace: true })
  }

  return (
    <nav className="flex sm:justify-between space-x-4 bg-slate-200">
      <div className="ml-3 rounded-lg px-3 py-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
        <NavLink to="home">Inicio</NavLink>
      </div>
      <div className="flex flex-row">
        <div className="rounded-lg px-3 py-4 text-slate-700 font-medium">
          <h1>{userName || 'Invitado'}</h1>
        </div>
        <div
          className="mr-3 cursor-pointer rounded-lg px-3 py-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          onClick={onLogoutUser}
        >
          Cerrar Sesión
        </div>
      </div>
    </nav>
  )
}

export default Navbar
