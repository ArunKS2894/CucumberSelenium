package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPages {

	@FindBy(id="Email")
	public static WebElement UserName;
	@FindBy(id="Password")
	public static WebElement Password;
	@FindBy(css="input[va;lue='Log in']")
	public static WebElement Login;
}
