import { URL_SERVICE_LOGIN } from '../constants/urlsServices'

const url = URL_SERVICE_LOGIN

const loginService = async (userCredentials) => {
  try {
    const params = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(url, params)
    const result = await response.json()
    const { status, message, data } = result
    const loginInformation = { status, message, data: JSON.parse(data) }
    return loginInformation
  } catch (error) {
    throw new Error(error)
  }
}

export default loginService
