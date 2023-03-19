import enc from "sjcl";
import config from "../../config";

export const CallBackend = async (action, extraParams, MintAddressByChoiceCartridge,walletAddress, signature,metamaskWallet, walletTorus, getWalletTorusPoly, getConnectMethode  ) => {
 //   console.log('CallBackend open pourrrrr ') 
  // console.log("CallBackend MintAddressByChoiceCartridge", MintAddressByChoiceCartridge)
    // console.log("CallBackend walletAddress", walletAddress)
    // console.log("CallBackend signature", signature)
    // console.log("CallBackend metamaskWallet", metamaskWallet)
    // console.log("CallBackend walletTorus", walletTorus)
    // console.log("action", action)
    // console.log("extraParams", extraParams)

    const CreatePayload = (action, extraParams, _mintAddress, _walletAddress, _signature, _metamaskWallet, _walletTorus, _getWalletTorusPoly, _getConnectMethode ) => {
    
        const params = {
          wallet: _walletAddress,
          hash: _mintAddress,
          signature:  _signature,
          walletMetamask: _metamaskWallet,
          walletTorus: _walletTorus,
          WalletTorusPoly: _getWalletTorusPoly,
          connectMethode : _getConnectMethode
        }
       
        const payload = {
          action: action,
          params: { ...params, ...extraParams }
        }
     //  console.log('payload CreatePayload', payload)
        const key = process.env.REACT_APP_CANDY_MACHINE_CONFIG;
        const encryptedPayload = btoa(enc.encrypt(key, JSON.stringify(payload)));
    
        let payloadEncrypted = {
          data: encryptedPayload
        }
    
        return payloadEncrypted;
    }

    const URLSERVER = config.apiURI
    const payload = CreatePayload(action, extraParams, MintAddressByChoiceCartridge, walletAddress, signature, metamaskWallet, walletTorus, getWalletTorusPoly, getConnectMethode )
   // console.log('payload',payload)
    const result = await window.fetch(URLSERVER + "/Q", { method: 'POST', body: JSON.stringify(payload), headers: { "Content-Type": "application/json" } })
    //console.log("result", result);
    const responseEncryped = await result.json();
    const key = process.env.REACT_APP_CANDY_MACHINE_CONFIG;
    const response = JSON.parse(enc.decrypt(key, atob(responseEncryped.data.toString())))
    //console.log("response", response)
    return response

}



