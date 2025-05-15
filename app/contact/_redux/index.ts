"use client";

import contactReducer from "./contact-slice";
import {
  saveContactSubmission,
  loadContactSubmissions,
} from "./contact-storage";

export { contactReducer, saveContactSubmission, loadContactSubmissions };
