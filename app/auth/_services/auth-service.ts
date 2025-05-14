"use client";

export const AUTH_STORAGE_KEY = "bd_compliance_auth";

export interface AuthState {
  isLoggedIn: boolean;
}

export const authService = {
  getAuthState: (): AuthState => {
    if (typeof window === "undefined") {
      return { isLoggedIn: false };
    }

    const storedState = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedState) {
      return { isLoggedIn: false };
    }

    try {
      return JSON.parse(storedState) as AuthState;
    } catch (error) {
      console.error("Failed to parse auth state", error);
      return { isLoggedIn: false };
    }
  },

  setAuthState: (state: AuthState): void => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
  },

  login: (): void => {
    authService.setAuthState({ isLoggedIn: true });
  },

  logout: (): void => {
    authService.setAuthState({ isLoggedIn: false });
  },

  isLoggedIn: (): boolean => {
    return authService.getAuthState().isLoggedIn;
  },
};
