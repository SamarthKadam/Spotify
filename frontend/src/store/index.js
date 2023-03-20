import { configureStore } from "@reduxjs/toolkit";
import controllerSlice from "./controllerSlice";

const store=configureStore({
    reducer:{controller:controllerSlice.reducer}
})

export default store;