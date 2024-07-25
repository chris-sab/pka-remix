import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../types";
import { initialState } from "./slice";

const selectSlice = (state: RootState) => state?.profile || initialState;

export const getProfile = createSelector(
  [selectSlice],
  state => state.profile,
);

export const isProfileProcessing = createSelector(
  [selectSlice],
  state => state.loading,
);