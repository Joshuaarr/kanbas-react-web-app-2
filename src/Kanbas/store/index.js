import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import AssignmentReducer from "../Courses/Assignments/AssignmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    AssignmentReducer,
  },
});

export default store;
