import React from 'react';
import { Router } from "@reach/router";

import User from "./user/[id]";

const MyRouter = () => {

    return (
      <Router>
        <User path="user/:id"></User>
      </Router>
    );
  
  };

export default MyRouter;