class ContactPage {

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// Locators///////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  URL="https://testqa.purse.tech/fake-contact"
  genderSelect = '#gender';
  firstNameInput = '#first-name';
  lastNameInput = '#last-name';
  companyInput = '#company';
  phoneInput = '#phone';
  messageTitleInput = '#message-title';
  messageTextarea = 'textarea';
  submitButton = '#submit-button';
  successMessage = '#popin-message';

  /////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////Methods/////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  // Method to get element by locator
  getElement(locator) {
    return cy.get(locator);
  }

  // Method to visit the contact page
  visit() {
    cy.visit(this.URL);
  }

  // method to set formulaire data
  fillContactForm() {
    this.getElement(this.genderSelect).select('female');
    this.getElement(this.firstNameInput).type('userFirstNameTest');
    this.getElement(this.lastNameInput).type('userLastNameTest');
    this.getElement(this.companyInput).type('companyTest');
    this.getElement(this.phoneInput).type('0101010101');
    this.getElement(this.messageTitleInput).type('Test Title');
    this.getElement(this.messageTextarea).type('This is a test message');
  }

  // method to click on submit btn
  submitForm() {
    this.getElement(this.submitButton).click();
  }

  // method to check that the message was saved
  verifySuccessMessage() {
    this.getElement(this.successMessage).should('have.text', 'Le message a été envoyé.');
  }
}

export default new ContactPage();
