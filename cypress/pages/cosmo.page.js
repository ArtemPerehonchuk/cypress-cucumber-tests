const Page = require('./page')

class CosmoPage extends Page {
    elements = {
        cosmoHeader : () => cy.get('h1').contains('COSMO'),
        bestCanadaSection : () => cy.get('#1z9JhuQusApH4IrTHPbRkb'),
        bestCanadaHeader : () => cy.get('h1').contains('BEST Canada Energy')
    }

    checkCosmoHeader() {
        this.elements.cosmoHeader().should('be.visible');
    }

    scrollToBestCanadaSection() {
        this.elements.bestCanadaSection().scrollIntoView();
    }

    clickOnBestCanadaSection() {
        this.elements.bestCanadaSection().click();
    }

    checkBestCanadaHeader() {
        this.elements.bestCanadaHeader().should('be.visible');
    }
}

module.exports = CosmoPage;