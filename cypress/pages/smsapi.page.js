const Page = require('./page')

class SmsApiPage extends Page {
    elements = {
        talkToAnExpertBtn : () => cy.get('#5Z3mTMcisseTHTN1nMjAAT')
    }

    clickOnTalkToAnExpertBtn() {
        this.elements.talkToAnExpertBtn().click({force: true});
    }
}

module.exports = SmsApiPage;