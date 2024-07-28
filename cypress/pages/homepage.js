const Page = require('./page')

class HomePage extends Page {

    elements = {
        hamburgerMenuBtn : () => cy.get('[aria-controls="navigation"]'),
        productsDropDown : () => cy.get('#radix-\\:Rkmj3m\\:'),
        resourcesDropDown : () => cy.get('#radix-\\:Rmmj3m\\:'),
        shopItem : () => cy.get('[href="https://shop.telnyx.com"]'),
        smsApiItem : () => cy.get('[id="5WvVlHUdpwqOMqyPAjErma"]'),
        sipTrunkingItem : () => cy.contains('SIP Trunking'),
        microsoftTeamsItem : () => cy.contains('Microsoft Teams'),
        customerStoriesItem : () => cy.contains('Customer Stories'),
        blogItem : () => cy.contains('Blog'),
        socialMediaLinksContainer : () => cy.get('#__next > div > footer > div.c-cUhiIV > div > div > ul'),
        linkedinLink : () => cy.get('[href="https://www.linkedin.com/company/telnyx/"]'),
        exploreOurDocsBtn : () => cy.get('[href="https://developers.telnyx.com/"]')
    }

    scrollToSocialMediaLinks() {
        this.elements.socialMediaLinksContainer().scrollIntoView();
    }

    clickOnLinkedinLink() {
        this.elements.linkedinLink().invoke('removeAttr', 'target').click(); 
    }

    checkLinkedinUrl(expectedUrl) {
        cy.request({
            url: expectedUrl,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(200); 
        });
    } 

    clickOnHamburgerMenu() {
        this.elements.hamburgerMenuBtn().click();
    }

    clickOnShopItem() {
        this.elements.shopItem().invoke('removeAttr', 'target').click();
    }

    checkTelnyxShopUrl(telnyxShopUrl) {
        cy.url().should('eq', telnyxShopUrl);
    }

    clickOnProductsDropDown() {
        this.elements.productsDropDown()
        .should('be.enabled')
        .and('be.visible')
        .realClick()
        .wait(2000);
    }

    clickOnSmsApiItem() {
        this.elements.smsApiItem().click();
    }

    clickOnMicrosoftTeamsItem() {
        this.elements.microsoftTeamsItem().click();
    }

    scrollToExploreOurDocsBtn() {
        this.elements.exploreOurDocsBtn()
        .scrollIntoView()
    }

    clickOnExploreOurDocsBtn() {
        this.elements.exploreOurDocsBtn().click();
    }

    checkDevelopersTelnyxUrl(developersTelnyxUrl) {
        cy.url().should('eq', developersTelnyxUrl);
    }

    clickOnResourcesDropDown() {
        this.elements.resourcesDropDown()
        .should('be.visible')
        .and('be.enabled')
        .realClick()
        .wait(2000);
    }

    clickOnBlogItem() {
        this.elements.blogItem().click({force: true});
    }

    clickOnCustomersStoriesItem() {
        this.elements.customerStoriesItem().click({force: true});
    }
}
module.exports = HomePage;