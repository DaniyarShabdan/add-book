import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./slises/bookSlice";
import { filterSlice } from "./slises/filterSlice";

export const Store = configureStore({
  reducer: {
    book: bookSlice.reducer,

    filter: filterSlice.reducer,
  },
});
