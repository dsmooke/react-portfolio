import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "../src/components/pages/Footer";

import "./App.css";

const App = () => (
  <div className="w3-light-grey w3-content" style={{ maxWidth: 1600 + "px" }}>
    <PortfolioContainer />
    <Footer />
  </div>
);

export default App;
