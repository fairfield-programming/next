// const axios = require('axios');

exports.onCreatePage = async ({ page, actions: { createPage } }) => {

  console.log('Page - ' + page.path);

  if (page.path.match(/^\/user/)) {

    page.matchPath = "/user/*";
    createPage(page);
   
  }

  if (page.path.match(/^\/article\//)) {

    page.matchPath = "/article/*"
    createPage(page);
   
  }

  if (page.path.match(/^\/question\//)) {

    page.matchPath = "/question/*"
    createPage(page);
   
  }

};