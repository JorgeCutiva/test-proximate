import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { KEY_NAME_USER_INFORMATION } from '../../constants/localStorage'
import setDataInLocalStorage from '../../helpers/setDataInLocalStorage'
import loginService from '../../services/loginService'
import LoginForm from './components/LoginForm/LoginForm'
import formConfiguration from './data/formConfiguration.json'
import { setUserInformationAction } from '../../redux/actions/userActions'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLoginUser = (status, data) => {
    const userInformation = { isAuthenticated: status, ...data }
    const userInformationInJSON = JSON.stringify(userInformation)
    setDataInLocalStorage(KEY_NAME_USER_INFORMATION, userInformationInJSON)
    dispatch(setUserInformationAction(userInformation))
    navigate('/home', { replace: true })
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true)
      const loginInformation = await loginService(values)
      const { status, message, data } = loginInformation
      if (!status) {
        throw new Error(message)
      }
      onLoginUser(status, data)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>
        <LoginForm
          formConfiguration={formConfiguration}
          onSubmit={(values) => handleSubmit(values)}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default Login
