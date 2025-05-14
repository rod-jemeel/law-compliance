import { combineReducers } from "@reduxjs/toolkit";
import checklistReducer from "./checklist-slice";

// Export types
export { type ChecklistState } from "./checklist-schema";

// Export hooks and providers
export { ChecklistProvider, useChecklist } from "./checklist-context";

// Combine all reducers
const checklistRootReducer = combineReducers({
  checklist: checklistReducer,
});

export default checklistRootReducer;
