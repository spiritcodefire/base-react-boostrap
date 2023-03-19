import { createSlice } from "@reduxjs/toolkit";

export const CornerSlice = createSlice({
  name: "clientCorner",
  initialState: {

    fetchCorner: {
      pvpHistory : null, 
      leaderBoard: null,
      wins : null , 
      username : null,
      mintAddress: null ,
      maxScore : null ,
      totalxp : null,
      nbGame : null,
      xptotalLevel : null,
      level : null,
      rank: null, 
      classementPvp : null,
      totalgiftcaught: null   ,
      totalvaultCaught:  null    ,
      totalbonusWorldcaught: null    ,
      imgUser : null,
    },
    
  },
  reducers: {

    setCorner  : (state, { payload }) => {
     //console.log("Payload: ", payload);
      state.fetchCorner = payload;
    },
    
    setlevelCorner  : (state, { payload }) => {
    //  console.log("Payload: ", payload);
      state.level = payload;
    },

    setUsername  : (state, { payload }) => {
    //  console.log("Payload: ", payload);
        state.fetchCorner.username = payload;
    },

    setInitiateCorner  : (state, _) => {
      state.fetchCorner.pvpHistory = null;
      state.fetchCorner.leaderBoard = null;
      state.fetchCorner.wins = null;
      state.fetchCorner.username = null;
      state.fetchCorner.mintAddress = null;
      state.fetchCorner.maxScore = null;
      state.fetchCorner.totalxp = null;
      state.fetchCorner.nbGame = null;
      state.fetchCorner.xptotalLevel = null;
      state.fetchCorner.level = null;
      state.fetchCorner.rank = null;
      state.fetchCorner.classementPvp = null;
      state.fetchCorner.totalgiftcaught = null;
      state.fetchCorner.totalvaultCaught = null;
      state.fetchCorner.totalbonusWorldcaught = null;
      state.fetchCorner.imgUser = null;
    },

  },
});

export const { setCorner, setlevelCorner, setUsername, setInitiateCorner } = CornerSlice.actions;

export const selectCorner = (state) => { 
   // console.log("state in redux", state.corner.fetchCorner)
    return state.corner.fetchCorner
}
export const getUsername = (state) => { 
    //console.log("state in redux", state.corner.fetchCorner.leaderBoard)
    return state.corner.fetchCorner.username
}
export const getPvpHistory = (state) => { 
    //console.log("state in redux", state.corner.fetchCorner.leaderBoard)
    return state.corner.fetchCorner.pvpHistory
}
export const getLevel = (state) => { 
    //console.log("state in redux", state.corner.fetchCorner.leaderBoard)
    return state.corner.fetchCorner.level
}
export const getVault = (state) => { 
    //console.log("state in redux", state.corner.fetchCorner.leaderBoard)
    return state.corner.fetchCorner.totalvaultCaught
}
export const getGift = (state) => { 
    //console.log("state in redux", state.corner.fetchCorner.leaderBoard)
    return state.corner.fetchCorner.totalgiftcaught
}
export const getRank = (state) => { 
    //console.log("state in redux", state.corner.fetchCorner.leaderBoard)
    return state.corner.fetchCorner.rank
}
export const getMintAddress = (state) => { 
    //console.log("state in redux", state.corner.fetchCorner.leaderBoard)
    return state.corner.fetchCorner.mintAddress
}




export default CornerSlice.reducer;


// addPicture: (state, { payload }) => {
//   state.pictures.push(payload);
// },

// setPicturesData: (state, { payload }) => {
// console.log("state.pictures : ", state.pictures);
// state.pictures = payload;
// },

// editPicture: (state, { payload }) => {
// state.pictures = state.pictures.map((pic) => {
// if (pic.id === payload[1]) {
//   return {
//     ...pic,
//     artist: payload[0],
//   };
// } else {
//   return pic;
// }
// });
// },

// deletePicture: (state, { payload }) => {
// state.pictures = state.pictures.filter((pic) => pic.id !== payload);
// }
