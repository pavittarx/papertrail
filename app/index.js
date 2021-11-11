import React from 'react';
import ReactDOM from 'react-dom';

import {Helmet} from "react-helmet";

import Home from "pages/Home";

ReactDOM.render(
  <> 
  <Helmet> 
    <title> Papertrail </title>
  </Helmet>

  Working?

  <Home />
  </>,
  document.getElementById('app')
);
