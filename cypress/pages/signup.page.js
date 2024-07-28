const Page = require('./page')

class SignUpPage extends Page {
    elements = {
        signUpForm : () => cy.get('[aria-label="signup-form"]')
    }

    checkSignUpForm() {
        this.elements.signUpForm().should('be.visible');
    }
}

module.exports = SignUpPage;