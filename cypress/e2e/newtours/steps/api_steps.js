import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let config;
let responseStatusCode;

// Import config
before(() => {
    cy.fixture("api_config.json").then((data) => {
      config = data;
    });
  });

  // step to send request to the dummay api
When("I send a request to the get users", () => {
  cy.request({
    method: "GET",
    url: config.endpoint,
    headers: {
      "app-id": config.api_id,
      "Content-Type": "application/json",
      "Accept-Language": "fr-FR",
    },
  }).then((response) => {
    responseStatusCode = response.status;
    cy.wrap(response.body).as("apiResponse"); 
  });
});

// check that the status code is equal to 200
Then("The status code is equal to {int}", (expectedStatusCode) => {
  expect(responseStatusCode).to.equal(expectedStatusCode);
});

// check the right format of users data
And("All users are in the right format", () => {
    cy.get("@apiResponse").then((apiResponse) => {
      verifyUsersFormat(apiResponse);
    });
  });
  
  // function to check the right format of the users data
  function verifyUsersFormat(data) {
    data.data.forEach((user) => {
      const id = user.id;
      const title = user.title;
      const firstName = user.firstName;
      const lastName = user.lastName;
      const picture = user.picture;
  
      expect(id).to.match(/^[0-9a-z]+$/, "id is not in the right format");
  
      expect(["mr", "ms", "mrs", "miss"]).to.include(title, "Title is not 'mr' or 'mrs or 'miss' or 'ms': " + title);
  
      expect(firstName).to.match(/^[a-zA-Z-]+$/, "firstName is not in the right format");
  
      expect(lastName).to.match(/^[a-zA-Z]+$/, "lastName is not in the right format");
  
      expect(picture).to.match(/^https/, "picture is not in the right format");
    });
  }
  


