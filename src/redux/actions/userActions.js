import {
  LOGIN_USER_ACTION,
  LOGOUT_USER_ACTION,
  SET_USER_INFORMATION_ACTION
} from '../constants/actionsTypes'

export const userLoginAction = {
  type: LOGIN_USER_ACTION
}

export const setUserInformationAction = (data) => ({
  type: SET_USER_INFORMATION_ACTION,
  payload: data
})

export const userLogoutAction = {
  type: LOGOUT_USER_ACTION
}
