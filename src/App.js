import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import HeadSection from "./Components/HeadSection";
import SecondSection from "./Components/SecondSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HeadSection/>
      <SecondSection/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
