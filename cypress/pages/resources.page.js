const Page = require('./page')

class ResourcesPage extends Page {
    elements = {
        searchField : () => cy.get('#search'),
        searchResultHeader : () => cy.get('#articles > div > div:nth-child(2) > h2'),
        flowBtn : () => cy.get('strong').contains('Flow')
    }

    async clickSeePricingButton() {
        await this.elements.seePricingBtn().click();
    }

    checkResourcesUrl(resourcesUrl) {
        cy.url().should('eq', resourcesUrl);
    }

    searchWord(word) {
        this.elements.searchField()
        .type(word);
    }

    pressEnter() {
        this.elements.searchField().type('{enter}').wait(1000);
    }

    scrollToFlowBtn() {
        this.elements.flowBtn().scrollIntoView();
    }

    clickFlowBtn() {
        this.elements.flowBtn().click();
    }

    checkSearchResultsHeader(word) {
        this.elements.searchResultHeader().should('contain.text', `Search results for “${word}”`);
    }
}

module.exports = ResourcesPage;