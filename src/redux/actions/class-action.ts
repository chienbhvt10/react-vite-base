import { GetAClass, GetAllClasses } from "@/graphql/graphql-gen";
import CLASS_API from "@/services/classes-apis";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getClassAsyncThunk = createAsyncThunk(
  "class/get",
  async (id: string, { rejectWithValue }) => {
    try {
      const response: GetAClass = await CLASS_API.getAClass(id);
      return response.getAClass;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllClassAsyncThunk = createAsyncThunk(
  "class/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response: GetAllClasses = await CLASS_API.getAllClasses();
      return response.getAllClasses;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
