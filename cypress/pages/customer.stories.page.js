const Page = require('./page')

class CastomerStoriesPage extends Page {
    elements = {
        cosmoSection : () => cy.get(':nth-child(2) > .c-buvHyO > .c-iNaFFq > .c-dwOMim > .c-cirIar'),
        readCastomerstoryLink : () => cy.get('#1Ceuoqk2nCN7yYIA2lD5ij')
    }

    scrollToCosmoSection() {
        this.elements.cosmoSection().scrollIntoView();
    }

    clickOnReadCustomerStoryLink() {
        this.elements.cosmoSection().trigger('mouseover');
        this.elements.readCastomerstoryLink().click().wait(1000);
    }

    checkCustomerStoriesUrl(customerStoriesUrl) {
        cy.url().should('eq', customerStoriesUrl);
    }
}

module.exports = CastomerStoriesPage;