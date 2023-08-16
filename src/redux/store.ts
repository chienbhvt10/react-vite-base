import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import productReducer from "./slices/product-slice";

import logger from "redux-logger";
export const store = configureStore({
  reducer: { authReducer, productReducer },
  middleware: [logger],
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
