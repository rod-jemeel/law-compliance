"use client";

import { createSlice } from "@reduxjs/toolkit";

export const AUTH_STORAGE_KEY = "bd_compliance_auth";

export interface AuthState {
  isLoggedIn: boolean;
  // Could add more fields here in the future like userId, userRole, etc.
}

const initialState: AuthState = {
  isLoggedIn: false,
};

// Helper function to load state from localStorage
const loadAuthFromStorage = (): AuthState => {
  if (typeof window === "undefined") {
    return initialState;
  }

  try {
    const storedState = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedState) {
      return JSON.parse(storedState) as AuthState;
    }
  } catch (error) {
    console.error("Failed to parse auth state from localStorage", error);
  }

  return initialState;
};

// Helper function to save state to localStorage
const saveAuthToStorage = (state: AuthState): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save auth state to localStorage", error);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: loadAuthFromStorage(),
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      saveAuthToStorage(state);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      saveAuthToStorage(state);
    },
    // Could add more actions like setUser, updateProfile, etc.
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
