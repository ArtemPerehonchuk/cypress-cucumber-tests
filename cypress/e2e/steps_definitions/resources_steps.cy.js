import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ResourcesPage from '../../pages/resources.page';
import FlowAnnouncementPage from '../../pages/flow.announcement.page';

const resourcesUrl = 'https://telnyx.com/resources';

const resourcesPage = new ResourcesPage();
const flowAnnouncementPage = new FlowAnnouncementPage();

Given('I open a {string} page', (page) => {
    if (page === 'Telnyx resources') {
        resourcesPage.navigate('/resources');
    } else if (page === 'Telnyx flow-announcement') {
        flowAnnouncementPage.navigate('/resources/flow-announcement');
    }
})

When('I type {string} into the {string} input field', (word, input) => {
    if (input === 'Search') {
        resourcesPage.searchWord(word);
    }
});

When('I press {string} on the keyboard', (key) => {
    if (key === 'Enter') {
        resourcesPage.pressEnter();
    }
});

When('I scroll the page down to the {string} button', (button) => {
    if (button === 'flow') {
        resourcesPage.scrollToFlowBtn();
    }
});

When('I click on {string} button', (button) => {
    if (button === 'Back to blog') {
        flowAnnouncementPage.clickBackToBlogBtn();
    } else if (button === 'flow') {
        resourcesPage.clickFlowBtn();
    }
});

Then('I should see the "Resources" page', () => {
    resourcesPage.checkResourcesUrl(resourcesUrl);
});

Then('I should see the "Search results for {string}" section', (word) => {
    resourcesPage.checkSearchResultsHeader(word);
});

Then('I should see "Introducing Telnyx Flow for no-code workflow automation" header', () => {
    flowAnnouncementPage.checkFlowHeader();
});


