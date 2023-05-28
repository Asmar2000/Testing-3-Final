class home {
  HomePageAssertions() {
    cy.anchor().should("have.attr", "href"); // have.attr comes from chai-jquery
    cy.footer().contains("CONNECT WITH US");
    cy.footer().contains("FORUMS");
    cy.footer().contains("COLLEGES");
    cy.footer().contains("GUIDANCE");
    cy.footer().contains("Popular States");
    cy.footer().contains("Popular States");
    cy.footer().contains("Search SAT scores");
    cy.footer().contains("Search ACT Scores");
    cy.footer().contains("search GPA’s");
  }
}
export default home;