var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

/*  You have 45 minutes to complete all three of these tasks as a group
		Group Exercise 2:

		1. Access the To Do app at "https://loghen41.github.io"
		2. Create a brand new list
		3. Confirm that the brand new list has been created
		4. Enter into the list
		5. Add 3 tasks to the list with different names
		6. Delete the very first of the three brand new tasks
*/
driver.sleep(3000);
driver.findElement(By.id('fullInput')).sendKeys('Test List');
driver.sleep(1000);

driver.quit();
