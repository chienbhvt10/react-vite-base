import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  currentUser: any;
}

const initialState: AuthState = {
  currentUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState) => {
      state.currentUser = {};
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
