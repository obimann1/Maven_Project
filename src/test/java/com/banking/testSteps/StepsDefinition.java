package com.banking.testSteps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsDefinition {
	
	    WebDriver driver;
		
		@Given("^Open the chrome browser and enter the URL of the Banking Application$")
		public void open_the_chrome_browser_and_enter_the_URL_of_the_Banking_Application() throws Throwable {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\obinzeadibe\\Downloads\\Selenium\\chromedriver.exe");
			 driver= new ChromeDriver();
			 driver.get("http://www.demo.guru99.com/V4/");
			 driver.manage().window().maximize();
		}

		@When("^User enters valid \"([^\"]*)\" and \"([^\"]*)\"$")
		public void user_enters_valid_and(String username, String password) throws Throwable {
			driver.findElement(By.name("uid")).sendKeys(username);
			driver.findElement(By.name("password")).sendKeys(password);	
		}

		@When("^User clicks on the submit button$")
		public void user_clicks_on_the_submit_button() throws Throwable {
			driver.findElement(By.name("btnLogin")).click();
		    
		}

		@Then("^User should successfully navigate to the Home Page and do what they want to do$")
		public void user_should_successfully_navigate_to_the_Home_Page_and_do_what_they_want_to_do() throws Throwable {
		    driver.close();
		    throw new PendingException();
		
		}
}


