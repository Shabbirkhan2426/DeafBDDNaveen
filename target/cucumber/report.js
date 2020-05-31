$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/login.feature");
formatter.feature({
  "name": "Broadleaf Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "AmazonLogin Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on amazon appplicaton",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_is_on_amazon_appplicaton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.title_of_login_page_is_Amazon_com_Online_Shopping_for_Electronics_Apparel_Computers_Books_DVDs_more()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Sign in link",
  "keyword": "And "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_clicks_on_Sign_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_enters_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Continue",
  "keyword": "And "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_clicks_on_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.User_enters_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.User_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cA[mazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more]\u003e but was:\u003cA[uthentication required]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat stepsdefination.LoginStepDef.user_is_on_homepage(LoginStepDef.java:79)\n\tat ✽.User is on homepage(file:///Users/shabbirkhan/IdeaProjects/DeafBDDNaveen/src/main/resources/login.feature:12)\n",
  "status": "failed"
});
});