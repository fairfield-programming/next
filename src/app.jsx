import React from 'react';
import { Router } from "@reach/router";

import User from "./pages/user";

const MyRouter = () => {

    return (
      <Router>
        <User path="/user/"></User>
      </Router>
    );
  
  };

export default MyRouter;