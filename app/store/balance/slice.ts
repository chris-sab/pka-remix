import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BalanceState } from "./types";

export const initialState: BalanceState = {
  balance: {
    decimals: null,
    formatted: null,
    symbol: null,
    value: null
  },
  loading: false
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    updateBalance(state, action: PayloadAction<any>) {
      state.balance = action.payload;
    },
    balanceRequest(state) {},
    balanceFetch(state) {
      state.loading = true;
    },
    balanceSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.balance = action.payload;
    }
  }
});

export const { actions, reducer, name: sliceKey} = balanceSlice;