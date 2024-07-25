import {
  AllEffect,
  call,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { actions } from './slice';
import { getBalanceInfo } from "./api";

function* balanceInfo(request: any): Generator<any, void, any> {
  try {
    const { payload } = request;

    yield put(actions.balanceFetch());
    const response: any = yield call(getBalanceInfo);

    if (response) {
      yield put(
        actions.balanceSuccess({
          decimals: response.decimals,
          formatted: response.formatted,
          symbol: response.symbol,
          value: response.value,
        })
      );
    } else {
      throw response;
    }
  } catch (error) {
    console.log(error);
  }
};

export function* balanceSaga(): Generator<AllEffect<any>, void, unknown> {
  yield all([
    takeLatest(actions.balanceRequest.type, balanceInfo),
  ]);
}