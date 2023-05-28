class resultsCases {
  //results
  resultsNavigationsAssertions() {
    cy.resultsDropdown().click();
    cy.wait(1000);
    cy.contains("Admissions Results").should("be.exist");
    cy.contains("Regular Decision").should("be.exist");
    cy.contains("Early Admissions").should("be.exist");
    cy.contains("Transfer Admissions").should("be.exist");
    cy.contains("Ivy Day Results").should("be.exist");
    cy.contains("Cal State Results").should("be.exist");
    cy.contains("UC Results").should("be.exist");
  }
  //..admissionResults
  AdmissionResultsPageAssertions() {
    cy.resultsDropdown().click();
    cy.admissionResults().click();
    cy.wait(1000);
    cy.url().should("include", data.admissionResultsURL);
    cy.wait(1000);
    cy.admissionTilte().should("include", "College Admission Results");
    cy.applicationStats().should("be.exist");
    cy.admissionsChart().should("be.exist");
    cy.PublicPrivateAdmissions().should("be.exist");
  }
  //..regularDecisionResults
  DecisionResultsPageAssertions() {
    cy.resultsDropdown().click();
    cy.regularDecisionResults().click();
    cy.wait(1000);
    cy.url().should("include", data.regularDecisionResultsURL);
    cy.wait(1000);
    cy.Header().should("include", "Regular Decision Central");
  }
  //..early-admissions
  EarlyAdmissionsPageAssertions() {
    cy.resultsDropdown().click();
    cy.earlyAdmissions().click();
    cy.wait(1000);
    cy.url().should("include", data.earlyAdmissionsURL);
    cy.wait(1000);
    cy.Header().should("include", "Early Admission Central");
  }
  //..Transfer Admissions
  TransferAdmissionsPageAssertions() {
    cy.resultsDropdown().click();
    cy.transferAdmissions().click();
    cy.wait(1000);
    cy.url().should("include", data.transferAdmissionsURL);
    cy.wait(1000);
    cy.Header().should("include", "Transfer Admissions");
  }
  //..Ivy Day
  IvyDayPageAssertions() {
    cy.resultsDropdown().click();
    cy.ivyDayResults().click();
    cy.wait(1000);
    cy.url().should("include", data.ivyDayResultsURL);
    cy.wait(1000);
    cy.Header().should("include", "Ivy Day is March");
  }
  //..calState
  calPageAssertions() {
    cy.resultsDropdown().click();
    cy.calStateAdmissionsResults().click();
    cy.wait(1000);
    cy.url().should("include", data.calStateAdmissionsResultsURL);
    cy.wait(1000);
    cy.Header().should("include", "Applying to a State School in California?");
  }
  //..ucResults
  ucPageAssertions() {
    cy.resultsDropdown().click();
    cy.ucResults().click();
    cy.wait(1000);
    cy.url().should("include", data.ucResultsURL);
    cy.wait(1000);
    cy.Header().should("include", "Applying to a State School in California?");
  }
}
export default resultsCases;
