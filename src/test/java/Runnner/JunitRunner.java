package Runnner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",glue="com.banking.testSteps",plugin={"json:target/cucumber.json","html:target/site/cucumber2-reports"})

//glue="com.banking.testSteps"
public class JunitRunner {
	
}
