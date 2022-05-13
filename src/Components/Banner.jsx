import React from "react";
import LoadMoreBtn from "./LoadMoreBtn";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="container">
      <div
        className="row justify-content-center text-center"
        style={{width: "100%"}}
      >
        <div className="col-md-12 justify-content-center text-center" style= {{height: "20rem", backgroundColor: "#f72585", borderRadius: "20px", margin: "2rem"}}>
          <h1 className="text-white"  style={{marginTop: "80px"}}>We stand with kashmir</h1>
          <LoadMoreBtn/>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}
