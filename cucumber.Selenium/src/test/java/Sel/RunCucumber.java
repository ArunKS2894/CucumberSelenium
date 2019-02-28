package Sel;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber; 

@RunWith(Cucumber.class)
//@CucumberOptions(plugin= {"pretty"}, monochrome=true, features= {"/src/test/resources/skeleton/login.feature"})
//@CucumberOptions(plugin= {"pretty"}, monochrome=true)
//@CucumberOptions(plugin= {"pretty"}, monochrome=true,tags= {"not @invalid"})//runs all the tags except invalid
//@CucumberOptions(plugin= {"pretty"}, monochrome=true,tags= {"@valid"}) //runs only valid tag in feature
@CucumberOptions(plugin= {"pretty","html:src/reports/cucumber-reports","json:src/reports/cucumber-reports/report1.json"},monochrome=true, tags= {"@valid"})//to created reports and json report
public class RunCucumber {

}
