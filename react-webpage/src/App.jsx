import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./NavbarComponent";
import Banner from "./Banner";
import Categories from "./Categories";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Banner />
      <Categories />
    </>
  );
};

export default App;
