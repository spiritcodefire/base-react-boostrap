

export const SwitchGame = async (arg, history) => {
  // console.log("arg :", arg);
   switch (arg) {
    case arg = "Solajump" :
    // console.log("case solajump") ;
      history.push('/solajump');
      break;
  
    case arg = "Gorillup" :
    // console.log("case gorillup");
      history.push('/gorillup');
      break;

    case arg = "Crazy Ducks" :
    // console.log("Crazy Ducks") ;
      history.push('/crazyducks');
      break;

    case arg = "Metaverse" :
    // console.log("Crazy Ducks") ;
      history.push('/metaverse');
      break;

    case arg = "galaxyrace" :
    // console.log("galaxyrace") ;
      history.push('/galaxyrace');
      break;

    default:
      break;
  }
}



