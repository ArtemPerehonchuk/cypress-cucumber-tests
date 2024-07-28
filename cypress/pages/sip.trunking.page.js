const Page = require('./page')

class SipTrunkingPage extends Page {
    elements = {
        seePricingBtn : () => cy.get('#4OD9pf6bV7RpBLfow70WkK'),
        portalLink : () => cy.get('a').contains('portal'),
    }

    scrollToSeePricingButton() {
        this.elements.seePricingBtn()
        .scrollIntoView()
    }

    clickSeePricingBtn() {
        this.elements.seePricingBtn().click();
    }

    checkSipTrunkingPricingUrl(sipTrunkingPricingUrl) {
        cy.url().should('eq', sipTrunkingPricingUrl);
    }

    clickOnPortalLink() {
        this.elements.portalLink().click();
    }
}

module.exports = SipTrunkingPage;