import openWebsite from '../support/action/openWebsite';
const { Given } = require('cucumber');

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  openWebsite
);