
import clickElement from '../support/action/clickElement';
import setInputField from '../support/action/setInputField';
import pressButton from '../support/action/pressButton';
import waitForSeconds from '../support/action/waitForSeconds';
import { When } from 'cucumber';


When(
  /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
  setInputField
);

When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
  clickElement
);

When(
  /^I wait for "([^"]*)?" seconds$/,
  waitForSeconds
);

When(
  /^I press "([^"]*)?"$/,
  pressButton
);