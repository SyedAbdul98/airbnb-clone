import React from "react";
import LoadMoreBtn from "./LoadMoreBtn";

export default function ShopBnb() {
  return (
   <div className="container">
      <div className="row justify-content-center text-center" style={{marginTop: "30px"}}>
      <div className="col-md-3" style={{marginTop: "30px"}}>
        <h1>Shop AirBnb Gift cards</h1>
        <button className="btn btn-dark bg-dark">Learn More</button>
      </div>
      <div className="col-md-9">
        <img
          src={require("../Images/download.jpg")}
          alt=""
          style={{ height: "auto", width: "100%" }}
        />
      </div>
    </div>
   </div>
  );
}
