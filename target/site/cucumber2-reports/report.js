$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyMaven.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for Banking Application",
  "description": "",
  "id": "login-functionality-for-banking-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To test Login functionality with valid credentials",
  "description": "",
  "id": "login-functionality-for-banking-application;to-test-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open the chrome browser and enter the URL of the Banking Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid \"mngr130203\" and \"vAvytUm\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should successfully navigate to the Home Page and do what they want to do",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.open_the_chrome_browser_and_enter_the_URL_of_the_Banking_Application()"
});
formatter.result({
  "duration": 27370867876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr130203",
      "offset": 19
    },
    {
      "val": "vAvytUm",
      "offset": 36
    }
  ],
  "location": "StepsDefinition.user_enters_valid_and(String,String)"
});
formatter.result({
  "duration": 9459233646,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 445987479,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_should_successfully_navigate_to_the_Home_Page_and_do_what_they_want_to_do()"
});
formatter.result({
  "duration": 115397348,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.banking.testSteps.StepsDefinition.user_should_successfully_navigate_to_the_Home_Page_and_do_what_they_want_to_do(StepsDefinition.java:39)\r\n\tat ✽.Then User should successfully navigate to the Home Page and do what they want to do(MyMaven.feature:7)\r\n",
  "status": "pending"
});
});