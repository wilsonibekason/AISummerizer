import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./article";
const rootReducer = {
    [articleApi.]
};
export const store = configureStore({
  reducer: rootReducer,
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
