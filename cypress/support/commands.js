//footer
Cypress.Commands.add("footer", () => {
  cy.get('footer')
});
//anchor
Cypress.Commands.add("anchor", () => {
cy.get('a')
});
//results
Cypress.Commands.add("resultsDropdown", () => {
  cy.get("[data-cc-name='results']");
});
Cypress.Commands.add("admissionResults", () => {
  cy.get("[href='/admission-results/']");
});
Cypress.Commands.add("regularDecisionResults", () => {
  cy.get(".dropdown-menu [href='/regular-decision-2022']");
});
Cypress.Commands.add("earlyAdmissions", () => {
  cy.get(".dropdown-menu [href='/early-admissions-2021']");
});
Cypress.Commands.add("transferAdmissions", () => {
  cy.get(".dropdown-menu [href='/transfer-admissions-2022']");
});
Cypress.Commands.add("ivyDayResults", () => {
  cy.get(".dropdown-menu [href='/ivy-day-2022']");
});
Cypress.Commands.add("calStateAdmissionsResults", () => {
  cy.get(".dropdown-menu [href='/cal-state-results-2022']");
});
Cypress.Commands.add("ucResults", () => {
  cy.get(".dropdown-menu [href='/uc-results-2022']");
});
//..admissionResults
Cypress.Commands.add("admissionTilte", () => {
  cy.get('[class="admissions-banner u-margin-top-lg"]');
});
Cypress.Commands.add("applicationStats", () => {
  cy.get('[class="admissions-chart-section"]');
});
Cypress.Commands.add("admissionsChart", () => {
  cy.get('[class="admissions-chart-wrapper-left"]');
});
Cypress.Commands.add("PublicPrivateAdmissions", () => {
  cy.get('[class="admissions-chart-wrapper-right"]');
});
Cypress.Commands.add("PublicPrivateAdmissions", () => {
  cy.get('[class="banner-cta-block-2 banner-cta-block"]');
});
//..regularDecisionResults
Cypress.Commands.add("PublicPrivateAdmissions", () => {
  cy.get('[class="banner-cta-block-2 banner-cta-block"]');
});
Cypress.Commands.add("Header", () => {
  cy.get('[class="header-content__container vbooth-content__container"]');
});
//Tools
Cypress.Commands.add("toolsDropdown", () => {
  cy.get("[data-cc-name='tools']");
});
