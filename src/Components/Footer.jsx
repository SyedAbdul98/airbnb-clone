import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div
        className="row"
        style={{padding: "40px", paddingBottom: "0",justifyContent: "space-evenly", backgroundColor: "#FAF5E4" }}
      >
        <div className=" col-md-3 support">
          <h5>Support</h5>
          <p>
            <a href="" className="text-dark">
              Help Center
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Safety information
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Cancellation options
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Our COVID-19 Response
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Supporting people with disabilities
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Report a neighborhood concern
            </a>
          </p>
        </div>
        <div className=" col-md-3 community">
          <h5>Community</h5>
          <p>
            <a href="" className="text-dark">
              Airbnb.org: disaster relief housing
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Support Afghan refugees
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Combating discrimination
            </a>
          </p>
        </div>
        <div className=" col-md-3 try-hosting">
          <h5>Try hosting</h5>
          <p>
            <a href="" className="text-dark">
              Try hosting
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              AirCover for Hosts
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Explore hosting resources
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              Visit our community forum
            </a>
          </p>
          <p>
            <a href="" className="text-dark">
              How to host responsibly
            </a>
          </p>
        </div>
        <div className=" col-md-3 about">
          <h5>About</h5>
          <p><a href="" className="text-dark">Newsroom</a></p>
<p><a href="" className="text-dark">Learn about new features</a></p>
<p><a href="" className="text-dark">Letter from our founders</a></p>
<p><a href="" className="text-dark">Careers</a></p>
<p><a href="" className="text-dark">Investors</a></p>
        </div>
      </div>
      <hr />
      <footer className="text-center">
          All rights reserved by airbnb. 2010 -2020
      </footer>
    </React.Fragment>
  );
}
