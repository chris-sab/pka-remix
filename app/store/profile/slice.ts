import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileState } from "./types";

export const initialState: ProfileState = {
  profile: {
    username: localStorage.getItem("username") ?? null,
    profile: localStorage.getItem("profile") ?? null,
    email: localStorage.getItem("email") ?? null,
    phone: localStorage.getItem("phone") ?? null,
  },
  loading: false
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action: PayloadAction<any>) {
      state.profile = action.payload;
    },
    profileRequest(state, action: PayloadAction<any>) {},
    profileFetch(state) {
      state.loading = true;
    },
    profileSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.profile = action.payload;
    }
  }
});

export const { actions, reducer, name: sliceKey} = profileSlice;