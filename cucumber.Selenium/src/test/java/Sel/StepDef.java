package Sel;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import Pages.LoginPages;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {
	WebDriver driver;
	
	public StepDef(SharedDriver driver) {
	super();
	this.driver = driver;
	}
	@Before
	public void beforeScenario(Scenario scenario)
	{
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\a.l.subramanian\\Downloads\\chromedriver_win32\\chromedriver.exe");
		//driver=new ChromeDriver();
		PageFactory.initElements(driver,LoginPages.class);
	}
	@After
	public void afterScenario(Scenario scenario)
	{
		//driver.close();
	}
	@Given("The url of the login page")
	public void the_url_of_the_login_page() {
				
		driver.get("http://demowebshop.tricentis.com/login");
		Assert.assertTrue(driver.getTitle().contains("Login"));
	}
	@When("user enters {word}")
	public void user_enters_abc_email_com(String username) {
		driver.findElement(By.id("Email")).sendKeys(username);
		}
	@When("user masks {word}")
	public void user_masks_abc(String password) {
		driver.findElement(By.id("Password")).sendKeys(password);
	}
	@Then("user is {word}")
	public void user_is_valid(String result) {
		if(result.equals("valid"))
		{
		driver.findElement(By.cssSelector("input[text='Log in']")).click();
		Assert.assertNotNull(driver.findElement(By.linkText("Log out")));
	}
}
}
