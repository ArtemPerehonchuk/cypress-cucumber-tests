import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/homepage';
import ResourcesPage from '../../pages/resources.page';
import SipTrunkingPage from '../../pages/sip.trunking.page';
import SipTrunkingPricingPage from '../../pages/sip.trunking.pricing.page';
import SmsApiPage from '../../pages/smsapi.page';
import MicrosoftTeamsPage from '../../pages/microsoft.teams.page';
import FlowAnnouncementPage from '../../pages/flow.announcement.page';
import CastomerStoriesPage from '../../pages/customer.stories.page';
import CosmoPage from '../../pages/cosmo.page';
import ContactUsPage from '../../pages/contactus.page';
import SignUpPage from '../../pages/signup.page';

const linkedinUrl = 'https://www.linkedin.com/company/telnyx/';
const telnyxShopUrl = 'https://shop.telnyx.com/';
const developersTelnyxUrl = 'https://developers.telnyx.com/';
const sipTrunkingPricingUrl = 'https://telnyx.com/pricing/elastic-sip';
const resourcesUrl = 'https://telnyx.com/resources';
const customerStoriesUrl = 'https://telnyx.com/customer-stories';

const homePage = new HomePage();
const resourcesPage = new ResourcesPage();
const sipTrunkingPage = new SipTrunkingPage();
const sipTrunkingPricingPage = new SipTrunkingPricingPage();
const smsApiPage = new SmsApiPage();
const microsoftTeamsPage = new MicrosoftTeamsPage();
const flowAnnouncementPage = new FlowAnnouncementPage();
const customerStoriesPage = new CastomerStoriesPage();
const cosmoPage = new CosmoPage();
const contuctUsPage = new ContactUsPage();
const signUpPage = new SignUpPage();

Given('I open the {string} website', (website) => {
    if (website === "Telnyx") {
      homePage.navigate('/');
    }
});

Given('I open the {string} page', (page) => {
    if (page === 'Telnyx SIP Trunking') {
        sipTrunkingPage.navigate('/products/sip-trunks');
    } else if (page === 'Telnyx resources') {
        resourcesPage.navigate('/resources');
    } else if (page === 'Telnyx flow-announcement') {
        flowAnnouncementPage.navigate('/resources/flow-announcement')
    } else if (page === 'Telnyx customer stories') {
        customerStoriesPage.navigate('/customer-stories')
    } else if (page === 'Telnyx Cosmo customer stories') {
        cosmoPage.navigate('/customer-stories/cosmo');
    }
});

When('I click on the hamburger menu', () => {
    homePage.clickOnHamburgerMenu();
});

When('I scroll the page down to the {string} section', (section) => {
    if (section === 'social media links') {
        homePage.scrollToSocialMediaLinks();
    } else if (section === 'Use a platform built by developers, for developers') {
        homePage.scrollToExploreOurDocsBtn();
    } else if (section === 'See our SIP trunking pricing') {
        sipTrunkingPage.scrollToSeePricingButton();
    } else if (section === 'Cosmo') {
        customerStoriesPage.scrollToCosmoSection();
    } else if (section === 'BEST Canada Energy') {
        cosmoPage.scrollToBestCanadaSection();
    } else if (section === 'Pay as you go') {
        sipTrunkingPricingPage.scrollToPayAsYouGoSection();
    }
});

When('I click on the {string} link',(link) => {
    if (link === 'LinkedIn') {
        cy.intercept('GET', 'https://www.linkedin.com/company/telnyx/').as('linkedinRequest');
        homePage.clickOnLinkedinLink();
    } else if (link === 'Operator Connect') {
      microsoftTeamsPage.clickOnOperatorConnectLink();
    } else if (link === 'Read customer story') {
        customerStoriesPage.clickOnReadCustomerStoryLink();
    } else if (link === 'portal') {
        sipTrunkingPage.clickOnPortalLink();
    }
});

When ('I type {string} into the {string} input field', (word, input) => {
    if (input === 'Search') {
        resourcesPage.searchWord(word);
    }
});

When('I scroll the page down to the {string} button', (button) => {
    if (button === 'flow') {
        resourcesPage.scrollToFlowBtn();
    }
});

When('I click on the {string} drop-down', (dropDown) => {
    if (dropDown === 'Products') {
        homePage.clickOnProductsDropDown();
    } else if (dropDown === 'Resources') {
        homePage.clickOnResourcesDropDown();
    }
});

When('I click on the {string} button', (button) => {
    if (button === 'TALK TO AN EXPERT') {
        smsApiPage.clickOnTalkToAnExpertBtn();
    } else if (button === 'EXPLORE OUR DOCS') {
        homePage.clickOnExploreOurDocsBtn();
    } else if (button === 'SEE PRICING') {
        sipTrunkingPage.clickSeePricingBtn();
    } else if (button === 'flow') {
        resourcesPage.clickFlowBtn();
    } else if (button === 'Back to blog') {
        flowAnnouncementPage.clickBackToBlogBtn();
    }
});

When('I click on the {string} item', (item) => {
    if (item === 'Shop') {
        homePage.clickOnShopItem();
    } else if (item === 'SMS API') {
        homePage.clickOnSmsApiItem();
    } else if (item === 'Microsoft Teams') {
        homePage.clickOnMicrosoftTeamsItem();
    } else if (item === 'Customer Stories') {
        homePage.clickOnCustomersStoriesItem();
    } else if (item === 'Blog') {
        homePage.clickOnBlogItem();
    }
});

When('I select the {string} item from the country drop-down', (item) => {
    if (item === 'Germany') {
        sipTrunkingPricingPage.clickGermanyItem();
    }
  });

When('I press {string} on the keyboard', (key) => {
    if (key === 'Enter') {
        resourcesPage.pressEnter();
    }
  });

When('I click on the {string} section', (section) => {
    if (section === 'BEST Canada Energy') {
        cosmoPage.clickOnBestCanadaSection();
    }
});

Then('I should see the {string} page', (page) => {
    if (page === 'Telnyx LinkedIn') {
        cy.wait('@linkedinRequest');
        homePage.checkLinkedinUrl(linkedinUrl);
    } else if (page === 'Telnyx shop') {
        homePage.checkTelnyxShopUrl(telnyxShopUrl);
    } else if (page === 'developers Telnyx') {
        homePage.checkDevelopersTelnyxUrl(developersTelnyxUrl);
    } else if (page === 'SIP Trunking pricing') {
        sipTrunkingPage.checkSipTrunkingPricingUrl(sipTrunkingPricingUrl);
    } else if (page === 'Resources') {
        resourcesPage.checkResourcesUrl(resourcesUrl);
    } else if (page === 'Telnyx resources') {
        resourcesPage.checkResourcesUrl(resourcesUrl); 
    } else if (page === 'Customer Stories') {
        customerStoriesPage.checkCustomerStoriesUrl(customerStoriesUrl);
    }
  });

Then('I should see the {string} form', (form) => {
    if (form === 'TALK TO AN EXPERT') {
        contuctUsPage.checkTalkToAnExpertForm();
    } else if (form === 'SIGN UP') {
        signUpPage.checkSignUpForm();
    }
});

Then('I should see the {string} header', (header) => {
    if (header === 'BENEFITS OF OPERATOR CONNECT') {
        microsoftTeamsPage.checkOperatorConnectHeader();
    } else if (header === 'SIP Trunking pricing for Germany') {
        sipTrunkingPricingPage.checkHeader();
    } else if (header === 'Introducing Telnyx Flow for no-code workflow automation') {
        flowAnnouncementPage.checkFlowHeader();
    } else if (header === 'COSMO') {
        cosmoPage.checkCosmoHeader();
    } else if (header === 'BEST Canada Energy') {
        cosmoPage.checkBestCanadaHeader();
    }
});

Then('I should see the "Search results for {string}" section', (word) => {
    resourcesPage.checkSearchResultsHeader(word);
});
  
