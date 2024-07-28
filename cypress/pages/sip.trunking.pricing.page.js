const Page = require('./page')

class SipTrunkingPricingPage extends Page {
    elements = {
        //payAsYouGoSection : () => cy.get('#pay-as-you-go'),
        countryDropDown : () => cy.get('#country-filter'),
        germanyItem : () => cy.get('a').contains('Germany'),
        sipPricingHeader : () => cy.get('h1').contains('SIP Trunking')
    }

    scrollToPayAsYouGoSection() {
        this.elements.countryDropDown().scrollIntoView();
    }

    clickGermanyItem() {
        this.elements.countryDropDown().click();
        this.elements.germanyItem().click({force: true});
    }

    checkHeader() {
        this.elements.sipPricingHeader().should('contain.text', 'SIP Trunking pricing for Germany');
    }
}

module.exports = SipTrunkingPricingPage;