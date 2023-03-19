import React, {useEffect, useState} from 'react'
import logo from "../../assets/logos/logoFLAHSLYbigTransparent.png"
import { Link } from 'react-router-dom';

const Home = () => {
    const [dataStock, setDataStock] = useState();
    useEffect(() => { // useEffect avec un array vide  permet  de faire une action au moment du chargement du component
        const fetchapi = () => {
          fetch("http://jsonplaceholder.typicode.com/posts?_limit=5")
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
      }, []); // array vide
  return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App.flashlly is live
        </p>
        <Link to="/dashboard" className='text-light text-decoration-none'>
           Link to Dashboard
        </Link>
        
        <br />
        <h2 className='text-danger'>Ci dessous un fetch de base de donnes</h2>
        {dataStock?.map((data)=>{
                return( 
                <div key={data.id} >
                    <div>data {data.id} : {data?.title}</div>
                </div>  
            )
        })
        }
      </header>
    </div>
  )
}

export default Home
