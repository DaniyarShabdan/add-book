import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
};
export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },
    pickFavoriteBook: (state, action) => {
      state.book = state.book.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });
    },
    deleteBook: (state, action) => {
      state.book = state.book.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBook, pickFavoriteBook,deleteBook } = bookSlice.actions;
