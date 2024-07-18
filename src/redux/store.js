import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./lists/listsSlice";

const store = configureStore({reducer: listsReducer})

export default store;