Feature: Login functionality for Banking Application

  Scenario: To test Login functionality with valid credentials
    Given Open the chrome browser and enter the URL of the Banking Application
    When User enters valid "mngr130203" and "vAvytUm"
    And User clicks on the submit button
    Then User should successfully navigate to the Home Page and do what they want to do
