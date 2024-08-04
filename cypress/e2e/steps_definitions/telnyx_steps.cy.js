import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/homepage';
import SmsApiPage from '../../pages/smsapi.page';
import MicrosoftTeamsPage from '../../pages/microsoft.teams.page';
import ContactUsPage from '../../pages/contactus.page';

const linkedinUrl = 'https://www.linkedin.com/company/telnyx/';
const telnyxShopUrl = 'https://shop.telnyx.com/';
const developersTelnyxUrl = 'https://developers.telnyx.com/';

const homePage = new HomePage();
const smsApiPage = new SmsApiPage();
const microsoftTeamsPage = new MicrosoftTeamsPage();
const contuctUsPage = new ContactUsPage();

Given('I open the {string} website', (website) => {
    if (website === "Telnyx") {
        homePage.navigate('/');
    }
});

When('I click on the hamburger menu', () => {
    homePage.clickOnHamburgerMenu();
});

When('I scroll the homepage down to the {string} section', (section) => {
    if (section === 'social media links') {
        homePage.scrollToSocialMediaLinks();
    } else if (section === 'Use a platform built by developers, for developers') {
        homePage.scrollToExploreOurDocsBtn();
    } 
});

When('I click on {string} link', (link) => {
    if (link === 'LinkedIn') {
        cy.intercept('GET', 'https://www.linkedin.com/company/telnyx/').as('linkedinRequest');
        homePage.clickOnLinkedinLink();
    } else if (link === 'Operator Connect') {
        microsoftTeamsPage.clickOnOperatorConnectLink();
    } 
});

When('I click on the {string} drop-down', (dropDown) => {
    if (dropDown === 'Products') {
        homePage.clickOnProductsDropDown();
    } else if (dropDown === 'Resources') {
        homePage.clickOnResourcesDropDown();
    }
});

When('I click on a {string} button', (button) => {
    if (button === 'TALK TO AN EXPERT') {
        smsApiPage.clickOnTalkToAnExpertBtn();
    } else if (button === 'EXPLORE OUR DOCS') {
        homePage.clickOnExploreOurDocsBtn();
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

Then('I should see {string} page', (page) => {
    if (page === 'Telnyx LinkedIn') {
        cy.wait('@linkedinRequest');
        homePage.checkLinkedinUrl(linkedinUrl);
    } else if (page === 'Telnyx shop') {
        homePage.checkTelnyxShopUrl(telnyxShopUrl);
    } else if (page === 'developers Telnyx') {
        homePage.checkDevelopersTelnyxUrl(developersTelnyxUrl);
    } 
});

Then('I should see the "TALK TO AN EXPERT" form', () => {
    contuctUsPage.checkTalkToAnExpertForm();
});

Then('I should see "BENEFITS OF OPERATOR CONNECT" header', () => {
        microsoftTeamsPage.checkOperatorConnectHeader();
});


