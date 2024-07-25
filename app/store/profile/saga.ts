import {
  AllEffect,
  call,
  all,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import { actions } from './slice';
import { getProfileInfo } from "./api";

function* profileInfo(request: any): Generator<any, void, any> {
  try {
    const { payload } = request;

    yield put(actions.profileFetch());
    const response: any = yield call(getProfileInfo);

    if (response) {
      yield put(
        actions.profileSuccess({
          username: response.username,
          profile: response.profile,
          email: response.email,
          phone: response.phone,
          activity: response.activity,
        })
      );
    } else {
      throw response;
    }
  } catch (error: any) {
    console.error(error);
  }
};

export function* profileSaga(): Generator<AllEffect<any>, void, unknown> {
  yield all([
    takeLatest(actions.profileRequest.type, profileInfo)
  ])
}