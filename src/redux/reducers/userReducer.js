import { KEY_NAME_USER_INFORMATION } from '../../constants/localStorage'
import getDataInLocalStorage from '../../helpers/getDataInLocalStorage'
import {
  LOGIN_USER_ACTION,
  LOGOUT_USER_ACTION,
  SET_USER_INFORMATION_ACTION
} from '../constants/actionsTypes'

const userInformationInLocalStorage = getDataInLocalStorage(
  KEY_NAME_USER_INFORMATION
)

const userInformationDefault = {
  id: undefined,
  isAuthenticated: false,
  lastName: 'Sin apellido',
  name: 'Sin nombre',
  position: undefined,
  role: undefined,
  userToken: undefined
}

const initialState = userInformationInLocalStorage || userInformationDefault

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_ACTION:
      return { ...state, isAuthenticated: true }
    case LOGOUT_USER_ACTION:
      return { ...userInformationDefault }
    case SET_USER_INFORMATION_ACTION:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default userReducer
