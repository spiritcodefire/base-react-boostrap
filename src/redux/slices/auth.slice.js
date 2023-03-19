import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "auth",
  initialState: {
    
    wallet : null,  // wallet phantom
    walletEth : null, // wallet metamask
    walletTorus: null, // wallet torus , !wallet phantom
    walletTorusPoly: null, // wallet torus , !wallet phantom
    torusProvider: null, // check si la connection torus s'est bien passE
    connectMethode : null, // phantom || metamask || torus || torusPoly
    statutGamer : null, // freePlayer || founder

    authState : false,
    signature : null, 

    mintAddress : null, // mintAddress recu serveur apres connection
    choiceCartridge: null, // Cartrige choisit ( mintAddress choisit)

    metaMaskWallet : null, // wallet metamask recu depuis la database
    flagMetaMaskWallet : false,
    flagAccessGame : false, // flag permettant d'entrer et d'acceder au jeux
    assetInventory : null, // flag permettant d'entrer et d'acceder au jeux

    testState: false,
  },
  reducers: {

    setWalletTorusPoly  : (state, { payload } ) => {
      //  console.log("Payload: ", payload);
        state.walletTorusPoly = payload;
    },

    setAssetInventory  : (state, { payload } ) => {
    //  console.log("Payload: ", payload);
      state.assetInventory = payload;
    },

    setStatutGamer  : (state, { payload } ) => {
    //  console.log("Payload: ", payload);
      state.statutGamer = payload;
    },

    setWallet  : (state, { payload } ) => {
   //  console.log("Payload: ", payload);
      state.wallet = payload;
    },

    setSignature  : (state, { payload } ) => {
    //  console.log("Payload: ", payload);
      state.signature = payload;
    },

    setflagAccessGame  : (state, { payload } ) => {
      //  console.log("Payload: ", payload);
        state.flagAccessGame = payload;
    },

    setMetaMaskWallet  : (state, { payload } ) => {
      //  console.log("Payload: ", payload); 
        state.metaMaskWallet = payload;
    },

    setFlagMetaMaskWallet  : (state, { payload } ) => {
      //  console.log("Payload: ", payload); 
        state.flagMetaMaskWallet = payload;
    },

    setWalletEth  : (state, { payload } ) => {
      //  console.log("Payload: ", payload); 
        state.walletEth = payload;
    },

    setWalletTorus  : (state, { payload } ) => {
      //  console.log("Payload: ", payload); 
        state.walletTorus = payload;
    },

    setTorusProvider  : (state, { payload } ) => {
      //  console.log("Payload: ", payload); 
        state.torusProvider = payload;
    },

    setTestState  : (state, { payload } ) => {
      //  console.log("Payload: ", payload);
        state.testState = payload;
    },

    setConnectedWith  : (state, { payload } ) => {
      //  console.log("Payload: ", payload);
        state.connectMethode = payload;
    },
    UpdateChoiceCartridge  : (state, { payload } ) => {
      //  console.log("Payload: ", payload);
        state.choiceCartridge = payload;
    },
    setInitiateAuth  : (state, { payload } ) => {
      state.wallet = null;
      state.walletEth = null;
      state.walletTorus = null;
      state.walletTorusPoly = null;
      state.connectMethode = null;
      state.statutGamer = null;
      state.authState = null;
      state.signature = null;
      state.mintAddress = null;
      state.choiceCartridge = null;
      state.metaMaskWallet = null;
      state.flagMetaMaskWallet = null;
      state.flagAccessGame = null;
      state.testState = null;
      },

  },
});

// export quis servira pour mes fonctions
export const {setWalletTorusPoly, setAssetInventory, setInitiateAuth, setStatutGamer, setTestState, UpdateChoiceCartridge, setWallet, setSignature, setflagAccessGame, setMetaMaskWallet, setFlagMetaMaskWallet, setWalletEth, setWalletTorus, setTorusProvider , setConnectedWith } = picturesSlice.actions;

export const getWalletTorusPoly = (state) => {
  // console.log("state.auth.choiceCartridge",state.auth.choiceCartridge)
   return state.auth.walletTorusPoly
}

export const getChoiceCartridge = (state) => {
 // console.log("state.auth.choiceCartridge",state.auth.choiceCartridge)
  return state.auth.choiceCartridge
}

export const getStatutPlayer = (state) => {
 // console.log("state.auth entier",state.auth)
  return state.auth.statutGamer
}

export const getWallet = (state) => {
  //console.log("select State",state.auth.signature)
  return state.auth.wallet
}

export const selectSignature = (state) => {
  //console.log("select State",state.auth.signature)
  return state.auth.signature
}

export const getFlagAccessGame = (state) => {
  return state.auth.flagAccessGame
}

export const getmetaMaskWallet = (state) => {
  return state.auth.metaMaskWallet
}

export const getflagMetaMaskWallet = (state) => {
   return state.auth.flagMetaMaskWallet
}

export const getWalletEth = (state) => {
   return state.auth.walletEth
}

export const getWalletTorus = (state) => {
   return state.auth.walletTorus
}

export const getTorusProvider = (state) => {
   return state.auth.torusProvider
}

export const getMintAddress = (state) => {
   return state.auth.mintAddress
}

export const getTestState = (state) => {
   return state.auth.testState
 }
export const getConnectMethode = (state) => {
   return state.auth.connectMethode
 }


export default picturesSlice.reducer;
