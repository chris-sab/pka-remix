import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../types";
import { initialState } from "./slice";

const selectSlice = (state: RootState) => state?.balance || initialState;

export const getBalance = createSelector(
  [selectSlice],
  state => state.balance,
);

export const isBalanceProcessing = createSelector(
  [selectSlice],
  state => state.loading,
);