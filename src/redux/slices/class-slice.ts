import { createSlice } from "@reduxjs/toolkit";
import {
  getAllClassAsyncThunk,
  getClassAsyncThunk,
} from "../actions/class-action";
import { Classes } from "@/graphql/graphql-gen";

export interface ClassState {
  classDetail: Classes | null;
  classList: Classes[] | [];
}

const initialState: ClassState = {
  classDetail: null,
  classList: [],
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    reducerNotCallApi: () => {},
  },
  extraReducers(builder) {
    builder.addCase(getAllClassAsyncThunk.fulfilled, (state, action) => {
      state.classList = action.payload;
    });
    builder.addCase(getClassAsyncThunk.fulfilled, (state, action) => {
      state.classDetail = action.payload;
    });
  },
});

export const { reducerNotCallApi } = classSlice.actions;

export default classSlice.reducer;
