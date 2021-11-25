import { useState, useEffect } from "react";

import { Helmet } from "react-helmet";
import Home from  "./Home";

import "assets/styles/normalize.css";
import "assets/styles/app.scss";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Papertrail</title>
      </Helmet>
      <Home />
    </>
  );
};

export default App;
