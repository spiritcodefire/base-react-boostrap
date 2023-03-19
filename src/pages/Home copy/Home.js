import React, {useEffect, useState} from 'react'
import logo from "../../assets/logos/logoFLAHSLYbigTransparent.png"

const Home = () => {
    const [dataStock, setDataStock] = useState();
    useEffect(() => {
        const fetchapi = () => {
          fetch("https://api-ms.flashlly.com/crypto")
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log('data',data)
            setDataStock(data)
          })
          console.log(dataStock)
        }
        fetchapi()
        
    
      }, [dataStock]);
  return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App.flashlly is live
        </p>
        {dataStock?.map((data)=>{
                return( 
                <div>
                    <div>{data.name}{" "}{data.price}</div>
                </div>  
            )
        })
        }
      </header>
    </div>
  )
}

export default Home
