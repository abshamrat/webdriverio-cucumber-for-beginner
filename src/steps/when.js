
import clickElement from '../support/action/clickElement';
import setInputField from '../support/action/setInputField';
import { When } from 'cucumber';


When(
  /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
  setInputField
);

When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
  clickElement
);