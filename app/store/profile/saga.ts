import {
  AllEffect,
  call,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { actions } from './slice';
import { getProfileAPI, updateProfileAPI } from "./api";

function* loadProfile(): Generator<any, void, any> {
  try {
    yield put(actions.profileFetch());
    const response: any = yield call(getProfileAPI);

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
    console.log(error);
  }
};

function* updateProfile(request: any): Generator<any, void, any> {
  const { payload } = request;

  try {
    yield put(actions.profileFetch());
    // @ts-ignore
    const response: any = yield call(updateProfileAPI(payload));

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
    console.log(error);
  }
};

export function* profileSaga(): Generator<AllEffect<any>, void, unknown> {
  yield all([
    takeLatest(actions.profileRequest.type, loadProfile),
    takeLatest(actions.updateProfile.type, updateProfile),
  ]);
};