import React from "react";
import LoadMoreBtn from "./LoadMoreBtn";
import discover from "../Images/discover3.jpg";

export default function BnbExperiences() {
  return (
    <React.Fragment>
      <div className="container">
      <div className="row">
        <div
          className="col-md-12"
          style={{ color: "black", marginTop: "20px" }}
        >
          <h2>Discover Airbnb Experiences</h2>
        </div>
        </div>
        <div className="row justify-content-center">
        <div
        className="col-md-6 justify-content-center text-center "
        // style={{paddingRight:"25px"}}
      >
        <div className="col-md-8 col-sm-10 justify-content-center text-center" style= {{height: "400px", backgroundImage : `url(${discover})`, borderRadius: "20px", margin: "2rem", width: "auto"}}>
          <h1 className="text-white">More About Bnb Experiences</h1>
          <LoadMoreBtn/>
        </div>
      </div>
      <div
        className="col-md-6 justify-content-center text-center "
        // style={{paddingRight:"25px"}}
      >
        <div className="col-md-8 col-sm-10 justify-content-center text-center" style= {{height: "400px", backgroundImage : `url(${discover})`, borderRadius: "20px", margin: "2rem", width: "auto"}}>
          <h1 className="text-white" >More About Bnb Experiences</h1>
          <LoadMoreBtn/>
        </div>
      </div>
        </div>
        </div>
    </React.Fragment>
  );
}
