$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/login.feature");
formatter.feature({
  "name": "Broadleaf Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Broadleaf Login Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 80\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Shabbirs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c0d:9f3d:e914:80dc%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_232\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010acb7329 chromedriver + 3838761\n1   chromedriver                        0x000000010ac51123 chromedriver + 3420451\n2   chromedriver                        0x000000010a9c562f chromedriver + 751151\n3   chromedriver                        0x000000010a926fa6 chromedriver + 102310\n4   chromedriver                        0x000000010a922f7f chromedriver + 85887\n5   chromedriver                        0x000000010a952473 chromedriver + 279667\n6   chromedriver                        0x000000010a94f2b3 chromedriver + 266931\n7   chromedriver                        0x000000010a9290bd chromedriver + 110781\n8   chromedriver                        0x000000010a92a055 chromedriver + 114773\n9   chromedriver                        0x000000010ac78ebf chromedriver + 3583679\n10  chromedriver                        0x000000010ac85e4a chromedriver + 3636810\n11  chromedriver                        0x000000010ac85be7 chromedriver + 3636199\n12  chromedriver                        0x000000010ac5c839 chromedriver + 3467321\n13  chromedriver                        0x000000010ac86707 chromedriver + 3639047\n14  chromedriver                        0x000000010ac6ecc7 chromedriver + 3542215\n15  chromedriver                        0x000000010ac9c324 chromedriver + 3728164\n16  chromedriver                        0x000000010acbd387 chromedriver + 3863431\n17  libsystem_pthread.dylib             0x00007fff75e3b2eb _pthread_body + 126\n18  libsystem_pthread.dylib             0x00007fff75e3e249 _pthread_start + 66\n19  libsystem_pthread.dylib             0x00007fff75e3a40d thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat stepsdefination.LoginStepDef.user_is_already_on_login_page(LoginStepDef.java:20)\n\tat ✽.User is already on login page(file:///Users/shabbirkhan/IdeaProjects/DeafBDDNaveen/src/main/resources/login.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "title of login page is Broadleaf Commerce Demo Store - Heat Clinic - Login",
  "keyword": "When "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.title_of_login_page_is_Personal_Banking()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters username and  User enters password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_enters_username_and_User_enters_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsdefination.LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
});