const Page = require('./page')

class ContactUsPage extends Page {
    elements = {
        talkToAnExpertForm : () => cy.get('#5tQmV9hsOULxIh30SYcWn2')
    }

    checkTalkToAnExpertForm() {
        this.elements.talkToAnExpertForm().should('be.visible');
    }
}

module.exports = ContactUsPage;