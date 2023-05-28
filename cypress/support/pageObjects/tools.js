class tools{
    toolsNavigations(){
        cy.toolsDropdown().click()
        cy.wait(1000);
    cy.contains("List Builder").should("be.exist");
    cy.contains("Chance Me and Match Me").should("be.exist");
    cy.contains("Bootcamp Finder").should("be.exist");
    }
}
export default tools;