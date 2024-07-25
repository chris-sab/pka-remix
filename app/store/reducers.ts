import { combineReducers } from '@reduxjs/toolkit';
import { all } from "redux-saga/effects";

import { reducer as profileReducer } from "./profile/slice";
import { reducer as balanceReducer } from "./balance/slice";
// add other reducers as needed

import { profileSaga } from "./profile/saga";
import { balanceSaga } from "./balance/saga";
// add other sagas as needed

export const rootReducer = combineReducers({
  profile: profileReducer,
  balance: balanceReducer,
  // add other reducers as needed
});

export function* rootSaga() {
  yield all([
    profileSaga(),
    balanceSaga(),
    // add other sagas as needed
  ]);
};

export type RootState = ReturnType<typeof rootReducer>;
