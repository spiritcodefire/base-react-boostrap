import { createSlice } from "@reduxjs/toolkit";

// ALL NFTS and Assets in Metaverse
export const assetsSlice = createSlice({
  name: "assets",
  initialState: {
    
    nfts : null,
    assetsMeta : null

  },
  reducers: {

    setNfts  : (state, { payload } ) => {
    //  console.log("Payload: ", payload);
      state.nfts = payload;
    },
    setAssetsMeta  : (state, { payload } ) => {
    //  console.log("Payload: ", payload);
      state.assetsMeta = payload;
    },

  },
});

// export quis servira pour mes fonctions
export const { setNfts, setAssetsMeta } = assetsSlice.actions;

export const getNfts = (state) => {
 // console.log("state.auth.choiceCartridge",state.auth.choiceCartridge)
  return state.assets.nfts
}

export const getAssetsMeta = (state) => {
 // console.log("state.auth.choiceCartridge",state.auth.choiceCartridge)
  return state.assets.assetsMeta
}

export default assetsSlice.reducer;
