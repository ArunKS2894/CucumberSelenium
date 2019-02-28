$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:Sel/login.feature");
formatter.feature({
  "name": "Login  feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "A valid Scenario",
  "description": "\t//Given The url of the login page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "user enters \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user masks \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user is \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ]
    },
    {
      "cells": [
        "abc@email.com",
        "abc123",
        "admin"
      ]
    },
    {
      "cells": [
        "xyz@email.com",
        "xyz456",
        "power"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid Scenario",
  "description": "\t//Given The url of the login page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "user enters abc@email.com",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enters_abc_email_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user masks abc123",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_masks_abc(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is admin",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_valid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid Scenario",
  "description": "\t//Given The url of the login page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "user enters xyz@email.com",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enters_abc_email_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user masks xyz456",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_masks_abc(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is power",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_valid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});