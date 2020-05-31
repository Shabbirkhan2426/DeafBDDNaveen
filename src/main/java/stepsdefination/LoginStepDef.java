package stepsdefination;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class LoginStepDef {

    WebDriver driver;


    @Given("User is on amazon appplicaton")
    public void user_is_on_amazon_appplicaton() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("https://www.amazon.com/");

    }

    @When("title of login page is Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more")
    public void title_of_login_page_is_Amazon_com_Online_Shopping_for_Electronics_Apparel_Computers_Books_DVDs_more() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",title);

    }

    @And("User clicks on Sign in link")
    public void user_clicks_on_Sign_in_link() {
        driver.findElement(By.partialLinkText("Sign in")).click();

    }

    @When("User enters username")
    public void user_enters_username() {
        driver.findElement(By.id("ap_email")).sendKeys("khanshabb111@gmail.com");

    }

    @When("User clicks on Continue")
    public void user_clicks_on_Continue() {
        driver.findElement(By.id("continue")).click();
    }

    @When("User enters password")
    public void User_enters_password(){
        driver.findElement(By.id("ap_password")).sendKeys("Agustina2426");
    }

    @And("User clicks on Sign in button")
    public void User_clicks_on_Sign_in_button(){
        driver.findElement(By.id("signInSubmit")).click();
    }
   /* @When("User clicks Continue button")
    public void User_clicks_Continue_button(){

        driver.findElement(By.xpath("//input[@id='continue']")).click();
    }*/

    @Then("User is on homepage")
    public void user_is_on_homepage() {
        String title = driver.getTitle();
        //WebElement element = driver.findElement(By.xpath("//img[@class='brand-logo']"));
        System.out.println("Home page title is "+ title);
        Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",title);
    }

}










