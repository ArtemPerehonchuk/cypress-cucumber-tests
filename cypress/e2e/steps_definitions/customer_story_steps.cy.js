import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CastomerStoriesPage from '../../pages/customer.stories.page';
import CosmoPage from '../../pages/cosmo.page';

const customerStoriesUrl = 'https://telnyx.com/customer-stories';

const customerStoriesPage = new CastomerStoriesPage();
const cosmoPage = new CosmoPage();

Given('I open the {string} page', (page) => {
    if (page === 'Telnyx customer stories') {
        customerStoriesPage.navigate('/customer-stories');
    } else if (page === 'Telnyx Cosmo customer stories') {
        cosmoPage.navigate('/customer-stories/cosmo');
    }
});

When('I scroll page down to the {string} section', (section) => {
    if (section === 'Cosmo') {
        customerStoriesPage.scrollToCosmoSection();
    } else if (section === 'BEST Canada Energy') {
        cosmoPage.scrollToBestCanadaSection();
    } 
});

When('I click on the "Read customer story" link', () => {
    customerStoriesPage.clickOnReadCustomerStoryLink();
});

When('I click on the {string} section', (section) => {
    if (section === 'BEST Canada Energy') {
        cosmoPage.clickOnBestCanadaSection();
    }
});

Then('I should see the "Customer Stories" page', () => {
    customerStoriesPage.checkCustomerStoriesUrl(customerStoriesUrl);
});

Then('I should see the {string} header', (header) => {
    if (header === 'COSMO') {
        cosmoPage.checkCosmoHeader();
    } else if (header === 'BEST Canada Energy') {
        cosmoPage.checkBestCanadaHeader();
    }
});