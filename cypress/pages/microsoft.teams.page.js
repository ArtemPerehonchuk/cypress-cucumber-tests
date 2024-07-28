const Page = require('./page')

class MicrosoftTeamsPage extends Page {
    elements = {
        operatorConnectLink : () => cy.contains('Operator Connect'),
        operatorConnectHeader : () => cy.contains('BENEFITS OF OPERATOR CONNECT')
    }

    clickOnOperatorConnectLink() {
        this.elements.operatorConnectLink().click();
    }

    checkOperatorConnectHeader() {
        this.elements.operatorConnectHeader().should('be.visible');
    }
}

module.exports = MicrosoftTeamsPage;