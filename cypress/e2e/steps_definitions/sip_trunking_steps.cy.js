import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SipTrunkingPage from '../../pages/sip.trunking.page';
import SipTrunkingPricingPage from '../../pages/sip.trunking.pricing.page';
import SignUpPage from '../../pages/signup.page';

const sipTrunkingPricingUrl = 'https://telnyx.com/pricing/elastic-sip';

const sipTrunkingPage = new SipTrunkingPage();
const sipTrunkingPricingPage = new SipTrunkingPricingPage();
const signUpPage = new SignUpPage();

Given('I open "Telnyx SIP Trunking" page', () => {
    sipTrunkingPage.navigate('/products/sip-trunks');
});

When('I scroll the page down to the {string} section', (section) => {
    if (section === 'See our SIP trunking pricing') {
        sipTrunkingPage.scrollToSeePricingButton();
    } else if (section === 'Pay as you go') {
        sipTrunkingPricingPage.scrollToPayAsYouGoSection();
    }
});

When('I click on the "portal" link', () => {
    sipTrunkingPage.clickOnPortalLink();
});

When('I click on the "SEE PRICING" button', () => {
    sipTrunkingPage.clickSeePricingBtn();
});

When('I select the "Germany" item from the country drop-down', () => {
    sipTrunkingPricingPage.clickGermanyItem();
});

Then('I should see the "SIP Trunking pricing" page', () => {
    sipTrunkingPage.checkSipTrunkingPricingUrl(sipTrunkingPricingUrl);
});

Then('I should see the "SIGN UP" form', () => {
    signUpPage.checkSignUpForm();
});

Then('I should see "SIP Trunking pricing for Germany" header', () => {
    sipTrunkingPricingPage.checkHeader();
});