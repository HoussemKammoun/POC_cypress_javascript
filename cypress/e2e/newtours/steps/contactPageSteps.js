import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ContactPage from "../Resources/contactPageObject";

// Step to navigate to the contact page
Given('I navigate to contact page', () => {
  ContactPage.visit();
});

// Set element of the formulaire
When('I set a message to contact purseteck', () => {
  ContactPage.fillContactForm();
});

// click on submit btn
And('I click on submit btn', () => {
  ContactPage.submitForm();
});

// check that the message was saved succefully
Then('the message is saved successfully', () => {
  ContactPage.verifySuccessMessage();
});
