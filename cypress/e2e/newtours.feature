Feature:QA Test

@ui
Scenario: As a user I want to send a message from the contact page
Given I navigate to contact page
When I set a message to contact purseteck
And I click on submit btn
Then the message is saved successfully

@api
Scenario Outline: As a user, I want to check that users' data has the right format
When I send a request to the get users
Then The status code is equal to <code>
And All users are in the right format
Examples:
| code |
| 200  |