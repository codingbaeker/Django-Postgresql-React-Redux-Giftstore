import { call, takeEvery, put } from "@redux-saga/core/effects";
import { User } from "../../models/user/types";
import { getInfoUser, login, signin} from "../../services/user/services";
import { loginSuccess, signinSuccess} from "./actions";
import { pushLoading , popLoading} from "../ui/actions";
import {pushLoadingSuccess, popLoadingSuccess} from "../ui/types"
import { LOGIN_REQUESTED,
    userLoginRequested,
    userLoginSuccess,
    userSigninRequested,
    userSigninSuccess,
    SIGNIN_REQUESTED,
} from "./types";

function* fetchLogin(action: userLoginRequested) {
    try {
      yield put<pushLoadingSuccess>(pushLoading());
      const userTokens: User = yield call(login, action.payload);
      const infoUser: User = yield call(getInfoUser, action.payload);
      yield put<userLoginSuccess>(
        loginSuccess({
          ...userTokens,
          ...infoUser,
        })
      );
    } catch (error) {
    } finally {
      yield put<popLoadingSuccess>(popLoading());
    }
  }

  
function* fetchSignIn(action: userSigninRequested) {
    try {
      yield put<pushLoadingSuccess>(pushLoading());
      const userTokens: User = yield call(signin, action.payload);
      const infoUser: User = yield call(getInfoUser, action.payload);
      yield put<userSigninSuccess>(
        signinSuccess({
          ...userTokens,
          ...infoUser,
        })
      );
    } catch (error) {
    } finally {
      yield put<popLoadingSuccess>(popLoading());
    }
}
  
  
export function* userSaga() {
    yield takeEvery(LOGIN_REQUESTED, fetchLogin);
    yield takeEvery(SIGNIN_REQUESTED, fetchSignIn);
  }