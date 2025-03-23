import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filterByTitle: "",
  filterByAuthor: "",
  favoritBooks: false,
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    titleValueHandler: (state, action) => {
      state.filterByTitle = action.payload;
    },
    authorValueHandler: (state, action) => {
      state.filterByAuthor = action.payload;
    },
    onlyFavorites: (state) => {
      state.favoritBooks = !state.favoritBooks;
    },
    reseFilter: (state) => {
      state.filterByTitle = "";
      state.filterByAuthor = "";
      state.favoritBooks = false;
    },
  },
});
