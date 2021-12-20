import { createSelector } from "reselect";
import { rootState } from "../reducer";
import { userState } from "./types";

const userSelector = (state: rootState) => state.user;

export const userInfoSelector = createSelector(
  userSelector,
  (userState: userState) => userState.info
);

export const userTokenSelector = createSelector(
  userInfoSelector, 
  (User) => User.token
);

export const userNameSelector = createSelector(
  userInfoSelector,
  (User) => User.name
);
