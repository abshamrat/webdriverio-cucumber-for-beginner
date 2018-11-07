import clickElement from '../support/action/clickElement';

import { When } from 'cucumber';


When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
  clickElement
);