import { combineReducers } from "redux";
import { uiState } from "./ui/types";
import { userReducer } from "./user/reducer";
import { userState } from "./user/types";
import { uiReducer } from "./ui/reducer";

export type rootState = {
  user: userState;
  ui : uiState;
};

export const rootReducer = combineReducers<rootState>({
  user: userReducer,
  ui: uiReducer,
});
