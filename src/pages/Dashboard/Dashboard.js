import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome dans le Dashboard</h1>
      <div className="container border">Message dans un container</div>
      <div className="container"> 

        <div className="row justify-content-center my-3 border">
        <h2 className='text-center'>flex center </h2>
          <div className="col-12 col-md-3 bg-dark text-light">3/12ieme en ordi et 12/12ieme en telephone portable</div>
          <div className="col-12 col-md-3 bg-danger text-light">flex 2/3</div>
          <div className="col-12 col-md-3  bg-success text-light">flex 3/3</div>
        </div>

        <div className="row justify-content-between my-3 border">
          <h2 className='text-center'>flex between </h2>
          <div className="col-12 col-md-3 bg-info text-light">3/12ieme</div>
          <div className="col-12 col-md-3 bg-secondary text-light">3/12ieme couleur warning</div>
          <div className="col-12 col-md-3  bg-warning text-light">flex 3/3 couleur warning</div>
        </div>

        <div className="row justify-content-around my-3 border">
        <h2 className='text-center'>flex around </h2>
          <div className="col-12 col-md-3 bg-dark text-light">3/12ieme</div>
          <div className="col-12 col-md-3 bg-danger text-light">flex 2/3</div>
          <div className="col-12 col-md-3  bg-success text-light">flex 3/3</div>
        </div>

        </div>
    </div>
  )
}

export default Dashboard
