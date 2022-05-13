import React from "react";
import BnbExperiences from "./BnbExperiences";
import CityCards from "./CityCards";
import Inspirations from "./Inspirations";
import ShopBnb from "./ShopBnb";

export default function SecondSection() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-8"
          style={{ marginTop: "300px", color: "black"}}
        >
          <h2>Inspiration for your next trip</h2>
        </div>
      </div>
      <CityCards />
      <BnbExperiences />
      <ShopBnb/>
      <Inspirations/>
    </div>
  );
}
