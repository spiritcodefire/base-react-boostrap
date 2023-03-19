import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../slices/auth.slice";
import clientCorner from "../slices/clientCorner.slice"
import assetsSlice from "../slices/assets.slice"

export default configureStore({
  // c'est ici que le reducer prend son nom // 
  reducer: {
    auth    :     picturesReducer,
    corner  :     clientCorner, 
    assets  :     assetsSlice
  },

});
