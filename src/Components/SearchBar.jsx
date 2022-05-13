import React from "react";
import { FaSistrix } from "react-icons/fa";

export default function SearchBar() {
  const fontClasses = {
    fontSize: "14px",
    fontWeight: "bold",
  };
  const borderRight = {
    borderRight: "1px solid #dee2e6",
  };
  return (
    <React.Fragment>
      <div className="container">
      <div
        className="row d-flex justify-content-center text-center bg-dark p-1"
       style={{width:"99%", height: "auto"}}
      >
        <div
          className="col-lg-7 col-sm-3"
          style={{ backgroundColor: "white", borderRadius: "40px" }}
        >
          <div className="row d-flex float-left pt-1 justify-content-center text-center" >
            <div className="col-lg-4 col-md-3">
              <span style={fontClasses}>Location</span>
              <input type="text" name="" id="" placeholder="Where are you going" style={{ width: "100%", border: "none"}}/>
            </div>

            <div className="col-lg-2 col-md-3" >
              <div
                style={{
                  textAlign: "center",
                  borderLeft: "1px solid #dee2e6",
                  borderRight: "1px solid #dee2e6",
                  paddingLeft: "20px"
                }}
              >
                <span style={fontClasses}>Check in</span>
                <input type="text" name="" id="" placeholder="Add dates" style={{ width: "100%", border: "none"}}/>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div style={borderRight}>
                <span style={fontClasses}>Check out</span>
                <input type="text" name="" id="" placeholder="Add dates" style={{ width: "100%", border: "none"}}/>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div>
                <span style={fontClasses}>Guests</span>
                <input type="text" name="" id="" placeholder="Add guests" style={{ width: "100%", border: "none"}}/>
              </div>
            </div>
                
            <div
              className="col-lg-2 pt-2"
              style={{
                color: "white",
                justifyContent: "center",
                backgroundColor: "#f72585",
                borderRadius: "50px",
                height: "45px",
                width: "45px"
              }}
            >
              <FaSistrix size={20}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}
