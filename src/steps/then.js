import checkTitle from '../support/check/checkTitle';
import waitFor from '../support/action/waitFor';
const { Then } = require('cucumber');


Then(
  /^I expect that the title is( not)* "([^"]*)?"$/,
  checkTitle
);

Then(
  /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
  {
      wrapperOptions: {
          retry: 3,
      },
  },
  waitFor
);
