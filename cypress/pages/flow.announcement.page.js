const Page = require('./page')

class FlowAnnouncementPage extends Page {
    elements = {
        flowHeader : () => cy.get('.c-cUhiIV > :nth-child(3) > .c-PJLV'),
        backToBlockBtn : () => cy.get('span').contains('Back to blog')
    }

    checkFlowHeader() {
        this.elements.flowHeader().should('be.visible');
    }

    clickBackToBlogBtn() {
        this.elements.backToBlockBtn().click();
    }
}

module.exports = FlowAnnouncementPage;