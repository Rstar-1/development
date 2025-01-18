import { configureStore } from "@reduxjs/toolkit";
import MineSlice from "./mine/MineSlice";

export const store = configureStore({
  reducer: {
    minedata: MineSlice,
  },
});

export default store;
