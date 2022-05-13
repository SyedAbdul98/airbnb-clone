import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="row" style={{paddingRight:"12px"}}>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="col-md-2 col-sm-1">
              <span
                className="navbar-brand mb-0 h1 justify-centent-center"
                style={{ fontSize: "2rem" }}
              >
                <span className="text-danger">air</span>bnb
              </span>
            </div>

            <div className="col-md-7 col-sm-7">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Places to stay
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    Experiences
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">
                    Online Experiences
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <ul className="nav justify-content-center">
                <li className="nav-item ">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Become a host
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    <i className="bi bi-globe2"></i>
                  </a>
                </li>
                <div
                  className="d-inline-flex"
                  style={{ backgroundColor: "white", borderRadius: "25px" }}
                >
                  <li className="nav-item ">
                    <a className="nav-link text-dark" href="#">
                      <i className="bi bi-list"></i>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link text-dark" href="#">
                      <i className="bi bi-person-circle"></i>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
