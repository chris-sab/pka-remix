import { combineReducers } from '@reduxjs/toolkit';
import { all } from "redux-saga/effects";

import { reducer as profileReducer } from "./profile/slice";
// add other reducers as needed

import { profileSaga } from "./profile/saga";
// add other sagas as needed

export const rootReducer = combineReducers({
  profile: profileReducer,
  // add other reducers as needed
});

export function* rootSaga() {
  yield all([
    profileSaga(),
    // add other sagas as needed
  ]);
};

export type RootState = ReturnType<typeof rootReducer>;