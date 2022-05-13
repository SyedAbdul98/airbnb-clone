import React from 'react'

export default function HomePic() {
  return (
   <div className="container">
      <div className='row justify-content-center text-center' style={{zIndex: 5}}>
      <div className="col-md-12" style={{height: "80%"}}>
        <img src={require("../Images/home.jpg")} alt="" className=''  style={{width: "100%", height: "100%", borderRadius: "20px", marginTop:"20px"}}/>
      </div>
    </div>
   </div>
  )
}
