import { Reducer } from "redux";
import { LOGOUT_SUCCESS, LOGIN_SUCCESS, userAction, userState, SIGNIN_SUCCESS } from "./types";

export const initialState: userState = {
  info: {},
};

export const userReducer: Reducer<userState, userAction> = (
  state: userState = initialState,
  action: userAction
): userState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        info: action.payload,
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
