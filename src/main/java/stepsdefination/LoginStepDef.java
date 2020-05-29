package stepsdefination;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class LoginStepDef {

    WebDriver driver;

    @Given("User is already on login page")
    public void user_is_already_on_login_page() {

         System.setProperty("webdriver.chrome.driver","/Users/shabbirkhan/projects/drivers/chromedriver");
         driver = new ChromeDriver();
         driver.get("https://demo.broadleafcommerce.org/login");


    }

    @When("title of login page is Broadleaf Commerce Demo Store - Heat Clinic - Login")
    public void title_of_login_page_is_Personal_Banking() {

        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Broadleaf Commerce Demo Store - Heat Clinic - Login",title);
    }

    @Then("User enters username and  User enters password")
    public void user_enters_username_and_User_enters_password() {
        driver.findElement(By.id("username")).sendKeys("khanshabb111@gmail.com");
        driver.findElement(By.id("password")).sendKeys("Agustina2426");

    }

    @Then("User clicks on login button")
    public void user_clicks_on_login_button() {
        driver.findElement(By.xpath("//*[@id='login']/form/button")).click();
    }


    /*@Then("User is on homepage")
    public void user_is_on_homepage() {
        String title = driver.getTitle();
        System.out.println("Home page title is "+title);
        Assert.assertEquals("PNC Online Banking",title);
    }*/



}










