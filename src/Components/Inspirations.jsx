import React from 'react'

export default function Inspirations() {

  const destinations = [
    {destination: "Destination for arts and culture"},
    {destination: "Destination for outdoor Adventures"},
    {destination: "Mountains cabins"},
    {destination: "Beach destinations"},
    {destination: "Popular destinations"},
    {destination: "Unique styles"}
  ]
  return (
    <React.Fragment>
      <div className="container">
        <h2 style={{marginTop: "20px"}}>Inspirations for future gateways</h2>
        <div className="row text-start m-1" style={{}}>
           
           {destinations.map((dest) => {
             return (
              <div className="col-md-2">
              <span>{dest.destination}</span>
          </div>
             );
           })}
           
            {/* <div className="col-md-2"><span>Destination for outdoor Adventures</span></div>
            <div className="col-md-2"><span>Mountains cabins</span></div>
            <div className="col-md-2"><span>Beach destinations</span></div>
            <div className="col-md-2"><span>Popular destinations</span></div>
            <div className="col-md-2"><span>Unique styles</span></div> */}
        </div>
        <hr />
        <div className="row justify-content-between text-center m-2" >
            <div className="col-md-3">
            <div><p className='m-0'>Phoneix</p></div>
            <div>
              <p className='m-0'>Arizona</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>San Fransisco</p></div>
            <div>
              <p className='m-0'>California</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>Keswick</p></div>
            <div>
              <p className='m-0'>England</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>Barcelona</p></div>
            <div>
              <p className='m-0'>Catolonia</p>
            </div>
            </div>
        </div>
        <div className="row justify-content-center text-center m-2" >
            <div className="col-md-3">
            <div><p className='m-0'>London</p></div>
            <div>
              <p className='m-0'>England</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>Vience</p></div>
            <div>
              <p className='m-0'>Italy</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>Paris</p></div>
            <div>
              <p className='m-0'>France</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>Lahore</p></div>
            <div>
              <p className='m-0'>Pakistan</p>
            </div>
            </div>
        </div>
        <div className="row justify-content-center text-center m-2" >
            <div className="col-md-3">
            <div><p className='m-0'>Delhi</p></div>
            <div>
              <p className='m-0'>India</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>Istanbul</p></div>
            <div>
              <p className='m-0'>Turkey</p>
            </div>
            </div>
            <div className="col-md-3">
            <div><p className='m-0'>Petersburg</p></div>
            <div>
              <p className='m-0'>Russia</p>
            </div>
            </div>
            <div className="col-md-3">
            <div className=''><p className='m-0' style={{fontWeight: "bold", cursor: "pointer"}}> <a href="" className='text-dark'>Show more</a></p></div>
           
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}
