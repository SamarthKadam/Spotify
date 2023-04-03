import { configureStore } from "@reduxjs/toolkit";
import controllerSlice from "./controllerSlice";

const store=configureStore({
    reducer:{controller:controllerSlice.reducer},
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;