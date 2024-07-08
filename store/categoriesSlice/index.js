import { getKitsCategories } from "@/api/kits";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const categoriesFetch = createAsyncThunk(
  "categories/fetch",
  getKitsCategories
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoriesFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(categoriesFetch.fulfilled, (state, action) => {
      console.log({ payload: action.payload });
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(categoriesFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = categoriesSlice.actions;
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
