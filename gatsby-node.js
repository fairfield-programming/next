// const axios = require('axios');

exports.onCreatePage = async ({ page, actions: { createPage } }) => {

  if (page.path.match(/^\/user/)) {

    page.matchPath = "/user/*"
    createPage(page);
   
  }

};