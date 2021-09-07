import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "services/authAPI";

const signUp = createAsyncThunk("auth/register", async (credentials) => {
  const data = await authAPI.signUpUser(credentials);
  return data;
});

const logIn = createAsyncThunk("auth/logIn", async (credentials) => {
  const data = await authAPI.logInUser(credentials);
  return data;
});

const logOut = createAsyncThunk("auth/logOut", async () => {
  await authAPI.logOutUser();
});

const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const savedToken = state.auth.token;
    if (savedToken === null) return rejectWithValue();
    const data = await authAPI.fetchCurrentUser(savedToken);
    return data;
  }
);

export { signUp, logIn, logOut, getCurrentUser };