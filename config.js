const config = {
    local: { // localhost
      apiURI: process.env.REACT_APP_URL_SERVER_LOCAL,
      GTM : '' 
    },
    prod: { 
      apiURI: process.env.REACT_APP_URL_SERVER_PROD,
      GTM : '' 
    },
    test : { 
      apiURI: process.env.REACT_APP_URL_SERVER_TEST,
      GTM : '' 
    },
  };
  
  export default config['test'];