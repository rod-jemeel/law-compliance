"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export interface ContactState {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

const initialState: ContactState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  },
  isSubmitting: false,
  isSubmitted: false,
  error: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateFormField: (
      state,
      action: PayloadAction<{ field: keyof ContactFormData; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.isSubmitted = false;
      state.error = null;
    },
    submitFormStart: (state) => {
      state.isSubmitting = true;
      state.error = null;
    },
    submitFormSuccess: (state) => {
      state.isSubmitting = false;
      state.isSubmitted = true;
    },
    submitFormFailure: (state, action: PayloadAction<string>) => {
      state.isSubmitting = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateFormField,
  resetForm,
  submitFormStart,
  submitFormSuccess,
  submitFormFailure,
} = contactSlice.actions;

export default contactSlice.reducer;
