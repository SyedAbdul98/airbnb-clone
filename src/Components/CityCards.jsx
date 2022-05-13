import React from "react";

export default function CityCards() {
  const cityTextStyles = {
    backgroundColor: "pink",
    color: "white",
  };

  const cityCardPic = {
    height: "200px",
  };

  const cityCards = [
    {
      name: "Lahore",
      img: "../Images/lahore.jpg"
    }
  ]
  return (
    <React.Fragment>
      <div className="container">
      <div
        className="row text-center p-2"
        // style={{ paddingLeft: "95px", paddingRight: "95px" }}
      >
        <div className="col-md-3">
          <div className="card" style={{ width: "15rem", height: "20rem" }}>
            <img
              className="card-img-top"
              src={require("../Images/lahore.jpg")}
              alt="Card image cap"
              style={cityCardPic}
            />
            <div className="card-body" style={cityTextStyles}>
              <h5 className="card-title">Lahore</h5>
              <p className="card-text">10 kilometers away</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "15rem", height: "20rem" }}>
            <img
              className="card-img-top"
              src={require("../Images/islamabad.jpg")}
              alt="Card image cap"
              style={cityCardPic}
            />
            <div className="card-body" style={cityTextStyles}>
              <h5 className="card-title">Islamabad</h5>
              <p className="card-text">500 kilometers away</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "15rem", height: "20rem" }}>
            <img
              className="card-img-top"
              src={require("../Images/karachi.jpg")}
              alt="Card image cap"
              style={cityCardPic}
            />
            <div className="card-body" style={cityTextStyles}>
              <h5 className="card-title">Karachi</h5>
              <p className="card-text">700 kilometers away</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "15rem", height: "20rem" }}>
            <img
              className="card-img-top"
              src={require("../Images/peshawar.jpg")}
              alt="Card image cap"
              style={cityCardPic}
            />
            <div className="card-body" style={cityTextStyles}>
              <h5 className="card-title">Peshawar</h5>
              <p className="card-text">1000 kilometers away</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}
