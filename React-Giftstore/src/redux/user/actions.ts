import { User } from "../../models/user/types";
import {
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  userLoginSuccess,
  userLogoutSuccess,
  userLoginRequested,
  LOGIN_REQUESTED,
  userSigninRequested,
  SIGNIN_REQUESTED,
  userSigninSuccess,
  SIGNIN_SUCCESS,
} from "./types";

export const signinRequested = (
  signUser: Partial<User>
): userSigninRequested => ({
  type: SIGNIN_REQUESTED,
  payload: signUser,
});

export const signinSuccess = (newUser: User): userSigninSuccess => ({
  type: SIGNIN_SUCCESS,
  payload: newUser,
})

export const loginRequested = (logUser: Partial<User>): userLoginRequested => ({
  type: LOGIN_REQUESTED,
  payload: logUser,
});

export const loginSuccess = (newUser: User): userLoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: newUser,
});

export const logoutSuccess = (): userLogoutSuccess => ({
  type: LOGOUT_SUCCESS,
});
