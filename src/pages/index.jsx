import React from 'react';
import { Router } from "@reach/router";

import User from "./user/[id]";
import Home from "./home";
import About from "./about";

const MyRouter = () => {

    return (
      <Router>
        <Home path="/"></Home>
        <About path="/about"></About>
        <User path="user/:id"></User>
      </Router>
    );
  
  };

export default MyRouter;